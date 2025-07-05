import { allowedHosts } from '@/utils/allowedHosts'
import type { CollectionConfig } from 'payload'

const Exercise: CollectionConfig = {
  slug: 'exercises',
  access: {
    read: allowedHosts,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'index', 'programmingLanguage', 'tutorial', 'difficultyLevel'],
    components: {
      beforeList: [
        {
          path: 'src/components/Tutorials/ExerciseLanguageAndTutorialTabs',
        },
      ],
    },
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
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'videoLink',
      type: 'text',
    },
    {
      name: 'hints',
      type: 'textarea',
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
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'tutorial',
      type: 'relationship',
      relationTo: 'tutorials',
      required: true,
      admin: {
        position: 'sidebar',
        condition: (data) => Boolean(data.programmingLanguage),
      },
      filterOptions: ({ data }) => ({
        programmingLanguage: {
          equals: data?.programmingLanguage,
        },
      }),
    },
  ],
}

export default Exercise
