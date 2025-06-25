import type { CollectionConfig } from 'payload';

const ProgrammingLanguage: CollectionConfig = {
  slug: 'programming-languages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'index'],
  },
  fields: [
    {
      name: 'index',
      type: 'number',
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  timestamps: false,
};

export default ProgrammingLanguage;