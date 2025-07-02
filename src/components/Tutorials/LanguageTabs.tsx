'use client'

import React from 'react'
import type { BeforeListClientProps } from 'payload'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Gutter } from '@payloadcms/ui'

const LanguageTabs = ({}: BeforeListClientProps) => {
  const [languages, setLanguages] = React.useState<any[]>([])
  const searchParams = useSearchParams()
  const selectedLang = searchParams.get('where[programmingLanguage][equals]')

  React.useEffect(() => {
    const fetchLanguages = async () => {
      const res = await fetch('/api/programming-languages?limit=100')
      const data = await res.json()
      setLanguages(data.docs || [])
    }
    fetchLanguages()
  }, [])

  return (
    <div style={{ marginBottom: '2rem' }}>
      <Gutter>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
          <strong style={{ fontSize: '1.2rem', marginRight: '1rem' }}>Filter by Language:</strong>

          <Link
            href="/admin/collections/tutorials"
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

          {languages
            .sort((a, b) => a.id - b.id)
            .map((lang) => {
              const isSelected = selectedLang === lang.id
              return (
                <Link
                  key={lang.id}
                  href={`/admin/collections/tutorials?where[programmingLanguage][equals]=${lang.id}`}
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
      </Gutter>
    </div>
  )
}

export default LanguageTabs
