import type { CollectionConfig } from 'payload';

const Topic: CollectionConfig = {
  slug: 'topics',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'index', 'programmingLanguage'],
  },
  fields: [
    {
      name: 'index',
      type: 'number',
      required: true,
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'programmingLanguage',
      type: 'relationship',
      relationTo: 'programming-languages',
      required: true,
    },
  ],
  timestamps: false,
};

export default Topic;