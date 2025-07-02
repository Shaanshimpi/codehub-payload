'use client'

import React from 'react'
import type { BeforeListClientProps } from 'payload'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Gutter } from '@payloadcms/ui'

const ExerciseLanguageAndTutorialTabs = ({}: BeforeListClientProps) => {
  const [languages, setLanguages] = React.useState<any[]>([])
  const [tutorials, setTutorials] = React.useState<any[]>([])
  const searchParams = useSearchParams()

  const selectedLang = searchParams.get('where[programmingLanguage][equals]')
  const selectedTutorial = searchParams.get('where[tutorial][equals]')

  React.useEffect(() => {
    const fetchLanguages = async () => {
      const res = await fetch('/api/programming-languages?limit=100')
      const data = await res.json()
      setLanguages(data.docs || [])
    }
    fetchLanguages()
  }, [])

  React.useEffect(() => {
    if (!selectedLang) {
      setTutorials([])
      return
    }
    const fetchTutorials = async () => {
      const res = await fetch(`/api/tutorials?limit=100&where[programmingLanguage][equals]=${selectedLang}`)
      const data = await res.json()
      setTutorials(data.docs || [])
    }
    fetchTutorials()
  }, [selectedLang])

  return (
    <div style={{ marginBottom: '2rem' }}>
      <Gutter>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <strong style={{ fontSize: '1.2rem', marginRight: '1rem' }}>Filter by Language:</strong>

          <Link
            href="/admin/collections/exercises"
            style={{
              padding: '0.6rem 1.2rem',
              fontSize: '2rem',
              borderRadius: '8px',
              backgroundColor: selectedLang ? '#e0e0e0' : '#007bff',
              color: selectedLang ? '#000' : '#fff',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            All
          </Link>

          {languages.map((lang) => {
            const isSelected = selectedLang === lang.id
            return (
              <Link
                key={lang.id}
                href={`/admin/collections/exercises?where[programmingLanguage][equals]=${lang.id}`}
                style={{
                  padding: '0.6rem 1.2rem',
                  fontSize: '2rem',
                  borderRadius: '8px',
                  backgroundColor: isSelected ? '#007bff' : '#e0e0e0',
                  color: isSelected ? '#fff' : '#000',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                }}
              >
                {lang.title}
              </Link>
            )
          })}
        </div>

        {selectedLang && tutorials.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            <strong style={{ fontSize: '1.2rem', marginRight: '1rem' }}>Filter by Tutorial:</strong>

            <Link
              href={`/admin/collections/exercises?where[programmingLanguage][equals]=${selectedLang}`}
              style={{
                padding: '0.6rem 1.2rem',
                fontSize: '1.5rem',
                borderRadius: '8px',
                backgroundColor: selectedTutorial ? '#e0e0e0' : '#28a745',
                color: selectedTutorial ? '#000' : '#fff',
                textDecoration: 'none',
                fontWeight: 'bold',
              }}
            >
              All Tutorials
            </Link>

            {tutorials.map((tutorial) => {
              const isSelected = selectedTutorial === tutorial.id
              return (
                <Link
                  key={tutorial.id}
                  href={`/admin/collections/exercises?where[programmingLanguage][equals]=${selectedLang}&where[tutorial][equals]=${tutorial.id}`}
                  style={{
                    padding: '0.6rem 1.2rem',
                    fontSize: '1.5rem',
                    borderRadius: '8px',
                    backgroundColor: isSelected ? '#28a745' : '#e0e0e0',
                    color: isSelected ? '#fff' : '#000',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  {tutorial.title}
                </Link>
              )
            })}
          </div>
        )}
      </Gutter>
    </div>
  )
}

export default ExerciseLanguageAndTutorialTabs
