import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: ({ req }) => {
      const allowedHosts = ['localhost:3000', 'localhost:3001', 'codehubindia.in'] // your frontend domains
      const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || ''
      return allowedHosts.includes(host)
    },
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
