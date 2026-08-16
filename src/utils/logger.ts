const isDevelopment = process.env.NODE_ENV !== 'production';

function redact(value: unknown) {
  if (typeof value === 'string' && value.length > 6) {
    return `${value.slice(0, 2)}***${value.slice(-2)}`;
  }

  return value;
}

export const logger = {
  error(message: string, details?: unknown) {
    if (isDevelopment) {
      console.error(message, redact(details));
    }
  },
  info(message: string, details?: unknown) {
    if (isDevelopment) {
      console.info(message, redact(details));
    }
  },
};
