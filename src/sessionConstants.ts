export const COOKIE_NAME = "sid";
export const SESSION_TTL_DAYS = 180;

export function expiryDate(days: number): Date {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000);
}
export function ttlMs(days: number): number {
  return days * 24 * 60 * 60 * 1000;
}