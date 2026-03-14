interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Clean up expired entries periodically to prevent memory leaks
const CLEANUP_INTERVAL_MS = 60 * 1000;
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, CLEANUP_INTERVAL_MS);

/**
 * Simple in-memory rate limiter using a fixed window per IP.
 * Returns { success: true } if under limit, { success: false, retryAfterSeconds } if over.
 */
export function rateLimit(
  ip: string,
  { maxRequests = 5, windowMs = 60 * 1000 } = {},
): { success: true } | { success: false; retryAfterSeconds: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { success: true };
  }

  if (entry.count < maxRequests) {
    entry.count++;
    return { success: true };
  }

  return {
    success: false,
    retryAfterSeconds: Math.ceil((entry.resetTime - now) / 1000),
  };
}
