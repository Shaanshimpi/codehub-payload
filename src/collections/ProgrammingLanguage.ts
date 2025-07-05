import type { CollectionConfig } from 'payload'

const ProgrammingLanguages: CollectionConfig = {
  slug: 'programming-languages',
  access: {
    read: ({ req }) => {
      const allowedHosts = ['localhost:3000', 'localhost:3001', 'codehubindia.in'] // your frontend domains
      const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || ''
      return allowedHosts.includes(host)
    },
  },

  admin: {
    useAsTitle: 'title',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'index', type: 'number', required: true, unique: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'logo', type: 'upload', relationTo: 'media' },
  ],
  timestamps: false,
}

export default ProgrammingLanguages
