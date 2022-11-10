import Iron from '@hapi/iron'
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies'



export async function setLoginSession(res, session) {
  const createdAt = Date.now()
  // Create a session object with a max age that we can validate later
  const obj = { ...session, createdAt, maxAge: MAX_AGE }
  console.log(obj)
  console.log("secretsauce")
  try {
    const token = await Iron.seal(obj, "secretsauce", Iron.defaults)
    setTokenCookie(res, token)
  } catch (err) {
    console.log(err.message);
  }


  
}

export async function getLoginSession(req) {
  const token = getTokenCookie(req)

  if (!token) return

  const session = await Iron.unseal(token,"secretsauce", Iron.defaults)
  const expiresAt = session.createdAt + session.maxAge * 1000

  // Validate the expiration date of the session
  if (Date.now() > expiresAt) {
    throw new Error('Session expired')
  }

  return session
}