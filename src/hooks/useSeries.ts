import { useState, useEffect } from 'react'

import { getMoviesAndSeries } from '~/services/getMoviesAndSeries'
import { ProgramType } from '~/types.d'
import type { Entry } from '~/types'

export function useSeries() {
  const [movies, setMovies] = useState<Entry[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getMoviesAndSeries()
      .then(({ entries }) => {
        const movies = entries
          // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
          .filter(entry => entry.releaseYear > 0 && entry.programType === ProgramType.Series)
          .toSorted((a, b) => a.title.localeCompare(b.title))

        setMovies(movies)
      })
      .catch(() => setError(true))
      .finally(() => setIsLoading(false))
  }, [])

  return {
    data: movies,
    isLoading,
    error,
  }
}
