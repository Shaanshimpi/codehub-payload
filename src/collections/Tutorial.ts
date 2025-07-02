import type { CollectionConfig } from 'payload'

const Tutorials: CollectionConfig = {
  slug: 'tutorials',
  admin: {
    useAsTitle: 'title',
    components: {
      beforeList: [
        {
          path: 'src/components/Tutorials/LanguageTabs',
        },
      ],
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'index',
      type: 'number',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
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
      name: 'content',
      type: 'textarea',
    },
  ],
}

export default Tutorials
