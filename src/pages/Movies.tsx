import { EmptyComponentWrapper } from '~/components/EmptyComponentWrapper'
import { EmptyData } from '~/components/EmptyData'
import { ErrorComponent } from '~/components/ErrorComponent'
import { ListPrograms } from '~/components/ListPrograms'
import { useMovies } from '~/hooks/useMovies'
import NavLayout from '~/layouts/NavLayout'
import type { Entry } from '~/types'

export default function Movies() {
  const { data, error, isLoading } = useMovies()

  return (
    <NavLayout title="Popular titles">
      {error ? <ErrorComponent /> : null}
      <EmptyComponentWrapper<Entry[]>
        EmptyComponent={<EmptyData />}
        NonEmptyComponent={<ListPrograms data={data} />}
        data={data}
        isLoading={isLoading}
      />
    </NavLayout>
  )
}
