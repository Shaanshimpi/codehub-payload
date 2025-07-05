export const allowedHosts = ({ req }: any) => {
  const allowedHostsList = [
    'localhost:3000',
    'localhost:3001',
    'codehubindia.in',
    'codehub-payload.vercel.app',
  ] // your frontend domains
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || ''
  return allowedHostsList.includes(host)
}
