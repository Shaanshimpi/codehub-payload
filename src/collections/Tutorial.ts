import type { CollectionConfig } from 'payload';

const Tutorial: CollectionConfig = {
  slug: 'tutorials',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'index', 'programmingLanguage'],
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
      name: 'programmingLanguage',
      type: 'relationship',
      relationTo: 'programming-languages',
    },
    {
      name: 'content',
      type: 'textarea',
    },
  ],
};

export default Tutorial;