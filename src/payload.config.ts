// storage-adapter-import-placeholder
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import ProgrammingLanguage from './collections/ProgrammingLanguage'
import Topic from './collections/Topic'
import Tutorial from './collections/Tutorial'
import Exercise from './collections/Exercise'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import Icon from './components/Branding/Icon'
import Logo from './components/Branding/Logo'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: `CodeHub |`,
    },
    components: {
      graphics: {
        Icon: {
          path: './components/Branding/Icon',
        },
        Logo: {
          path: './components/Branding/Logo',
        },
      },
    },
  },
  collections: [
    Users,
    Media,

    ProgrammingLanguage,
    // Topic,
    Tutorial,
    Exercise,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    formBuilderPlugin({
      defaultToEmail: `shaanshimpi04@gmail.com`,
      fields: {
        state: false,
        country: false,
        payment: false,
      },
    }),

    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
