// src/collections/ProgrammingLanguages.ts
import type { CollectionConfig } from 'payload'
// import { LanguageTutorials } from '../components/LanguageTutorials'
// import { LanguageExercises } from '../components/LanguageExercises'
// import LanguageDashboard from '@/components/LanguageDashboard'

const ProgrammingLanguages: CollectionConfig = {
  slug: 'programming-languages',
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
