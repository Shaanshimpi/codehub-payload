import type { CollectionConfig } from 'payload'

const Tutorials: CollectionConfig = {
  slug: 'tutorials',
  access: {
    read: ({ req }) => {
      const allowedHosts = ['localhost:3000', 'localhost:3001', 'codehubindia.in'] // your frontend domains
      const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || ''
      return allowedHosts.includes(host)
    },
  },
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
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
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
