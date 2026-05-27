const TOKEN_PREFIX = "wd-site-access:";

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export function isSiteAuthEnabled(): boolean {
  return Boolean(process.env.SITE_PASSWORD?.trim());
}

export async function createAccessToken(password: string): Promise<string> {
  const data = new TextEncoder().encode(`${TOKEN_PREFIX}${password}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return toHex(hash);
}

export async function getExpectedAccessToken(): Promise<string | null> {
  const password = process.env.SITE_PASSWORD?.trim();
  if (!password) return null;
  return createAccessToken(password);
}

export async function isValidAccessToken(token: string | undefined | null): Promise<boolean> {
  const expected = await getExpectedAccessToken();
  if (!expected || !token) return false;
  return constantTimeEqual(token, expected);
}

export function verifySitePassword(input: string): boolean {
  const expected = process.env.SITE_PASSWORD?.trim();
  if (!expected) return true;
  return constantTimeEqual(input, expected);
}

export const SITE_AUTH_COOKIE = "site-access";
