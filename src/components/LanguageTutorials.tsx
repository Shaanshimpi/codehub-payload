// src/components/LanguageTutorials.tsx
'use client'
import React from 'react'
import { useListQuery, useDocumentInfo } from '@payloadcms/ui'
import { Table } from '@payloadcms/ui'

export const LanguageTutorials = () => {
  const { id } = useDocumentInfo()
  const { data, query } = useListQuery()

  const columns = [
    { accessor: 'title', Header: 'Title' },
    { accessor: 'index', Header: 'Lesson' },
  ]

  return (
    <div className="gutter">
      {query ? <p>Loading tutorials...</p> : <Table data={data?.docs || []} columns={columns} />}
    </div>
  )
}
