import { env } from '@/config/env';
import { ApiError, NetworkError } from '@/services/api/errors';

type ApiRequestOptions = Omit<RequestInit, 'body' | 'headers' | 'signal'> & {
  body?: BodyInit | null;
  headers?: HeadersInit;
  signal?: AbortSignal;
};

type TokenProvider = () => Promise<string | null>;

let getAccessToken: TokenProvider = async () => null;

export function registerAccessTokenProvider(provider: TokenProvider) {
  getAccessToken = provider;
}

export async function apiRequest<T>(
  path: string,
  options: ApiRequestOptions = {},
): Promise<T> {
  if (!env.EXPO_PUBLIC_API_URL) {
    throw new ApiError('Missing public API base URL configuration.', {
      code: 'missing_api_url',
      status: 500,
    });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), env.EXPO_PUBLIC_API_TIMEOUT_MS);

  const accessToken = await getAccessToken();
  const headers = new Headers(options.headers);
  headers.set('Accept', 'application/json');

  if (!headers.has('Content-Type') && options.body) {
    headers.set('Content-Type', 'application/json');
  }

  if (accessToken) {
    headers.set('Authorization', `Bearer ${accessToken}`);
  }

  try {
    const response = await fetch(`${env.EXPO_PUBLIC_API_URL}${path}`, {
      ...options,
      headers,
      signal: options.signal ?? controller.signal,
    });

    if (!response.ok) {
      let details: unknown = null;

      try {
        details = await response.json();
      } catch {
        details = await response.text();
      }

      throw new ApiError('API request failed.', {
        code: 'api_request_failed',
        details,
        status: response.status,
      });
    }

    if (response.status === 204) {
      return undefined as T;
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof Error && error.name === 'AbortError') {
      throw new ApiError('API request timed out.', {
        code: 'request_timeout',
        status: 408,
      });
    }

    throw new NetworkError();
  } finally {
    clearTimeout(timeoutId);
  }
}
