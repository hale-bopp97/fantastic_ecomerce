import { magic } from '../../lib/magic'
import { removeTokenCookie } from '../../lib/auth-cookies'
import { getLoginSession } from '../../lib/auth'
export default async function logout(req, res) {
  console.log(req.body);
  try {
    const session = await getLoginSession(req.body)
    console.log(session);
    if (session) {
      await magic.users.logoutByIssuer(session.issuer)
      removeTokenCookie(res)
    }
  } catch (error) {
    console.error(error)
  }
  res.writeHead(302, { Location: '/' })
  res.end()
}