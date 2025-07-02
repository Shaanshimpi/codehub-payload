'use client'

import React, { useEffect, useState } from 'react'
import { useDocumentInfo } from '@payloadcms/ui'
import { getPayloadAPIURL } from '../utils/getPayloadAPIURL'

export default function LanguageDashboard() {
  const { id } = useDocumentInfo()
  const [tutorials, setTutorials] = useState([])
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      const baseUrl = getPayloadAPIURL()
      const resTutorials = await fetch(
        `${baseUrl}/api/tutorials?where[programmingLanguage][equals]=${id}`,
      )
      const resExercises = await fetch(
        `${baseUrl}/api/exercises?where[programmingLanguage][equals]=${id}`,
      )

      const tutorialData = await resTutorials.json()
      const exerciseData = await resExercises.json()

      setTutorials(tutorialData.docs || [])
      setExercises(exerciseData.docs || [])
    }

    fetchData()
  }, [id])

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Tutorials</h2>
      <ul>
        {tutorials.map((tut: any) => (
          <li key={tut.id}>{tut.title}</li>
        ))}
      </ul>

      <h2>Exercises</h2>
      <ul>
        {exercises.map((ex: any) => (
          <li key={ex.id}>{ex.question?.substring(0, 50) || 'Untitled'}</li>
        ))}
      </ul>
    </div>
  )
}
