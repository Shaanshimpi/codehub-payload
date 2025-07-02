export const getPayloadAPIURL = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  return process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000'
}
