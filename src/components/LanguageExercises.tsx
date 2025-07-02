// src/components/LanguageExercises.tsx
'use client'
import React from 'react'
import { useListQuery, useDocumentInfo } from '@payloadcms/ui'
import { Table } from '@payloadcms/ui'

export const LanguageExercises = () => {
  const { id } = useDocumentInfo()
  const { data, query } = useListQuery()

  const columns = [
    { accessor: 'title', Header: 'Title' },
    { accessor: 'difficultyLevel', Header: 'Difficulty' },
  ]

  return (
    <div className="gutter">
      {query ? <p>Loading exercises...</p> : <Table data={data?.docs || []} columns={columns} />}
    </div>
  )
}
