// lib/auth.ts
import { cookies } from "next/headers"
import { jwtVerify } from "jose"

const secret = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function getAccountFromCookie() {
  const cookieStore = cookies()
  const token = (await cookieStore).get("token")?.value
  if (!token) return null

  try {
    const { payload } = await jwtVerify(token, secret)
    return payload
  } catch {
    return null
  }
}
