import type { CollectionConfig } from 'payload'

const ProgrammingLanguages: CollectionConfig = {
  slug: 'programming-languages',
  access: {
    read: ({ req }) => {
      const origin = req.headers.origin || req.headers.referer || ''
      const allowedOrigins = [
        'https://codehubindia.com',
        'https://www.codehubindia.com',
        'http://localhost:3000', // for development
        'http://localhost:3001', // for development
      ]
      return allowedOrigins.some((url) => origin.startsWith(url))
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
