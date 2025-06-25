import type { CollectionConfig } from 'payload';

const Exercise: CollectionConfig = {
  slug: 'exercises',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'index', 'programmingLanguage', 'topic', 'difficultyLevel'],
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
      name: 'videoLink',
      type: 'text',
    },
    {
      name: 'hints',
      type: 'textarea'
    },
    {
      name: 'code',
      type: 'textarea',
    },
    {
      name: 'explanation',
      type: 'textarea',
    },
    {
      name: 'explanationHindi',
      type: 'textarea',
    },
    {
      name: 'explanationMarathi',
      type: 'textarea',
    },
    {
      name: 'difficultyLevel',
      type: 'number',
      min: 1,
      max: 5,
    },
    {
      name: 'programmingLanguage',
      type: 'relationship',
      relationTo: 'programming-languages',
    },
    // {
    //   name: 'topic',
    //   type: 'relationship',
    //   relationTo: 'topics',
    //   required: true,
    //   filterOptions: ({ relationTo, data }) => {
    //     if (relationTo === 'topics' && data?.programmingLanguage) {
    //       return {
    //         programmingLanguage: {
    //           equals: data.programmingLanguage,
    //         },
    //       };
    //     }
    //     return {};
    //   },
    // },
  ],
};

export default Exercise;