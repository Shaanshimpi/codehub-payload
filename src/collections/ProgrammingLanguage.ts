import { allowedHosts } from '@/utils/allowedHosts'
import type { CollectionConfig } from 'payload'

const ProgrammingLanguages: CollectionConfig = {
  slug: 'programming-languages',
  access: {
    read: allowedHosts,
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
