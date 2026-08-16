export interface ApiListResponse<T> {
  items: T[];
  nextCursor?: string | null;
}

export interface ApiMetadata {
  fetchedAt: string;
  requestId?: string;
  sourceName?: string;
}
