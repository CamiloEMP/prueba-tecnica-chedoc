import { EmptyComponentWrapper } from '~/components/EmptyComponentWrapper'
import { EmptyData } from '~/components/EmptyData'
import { ErrorComponent } from '~/components/ErrorComponent'
import { ListPrograms } from '~/components/ListPrograms'
import { useMovies } from '~/hooks/useMovies'
import Layout from '~/layouts/Layout'
import type { Entry } from '~/types'

export default function Movies() {
  const { data, error, isLoading } = useMovies()

  return (
    <Layout title="Popular titles">
      {error ? <ErrorComponent /> : null}
      <EmptyComponentWrapper<Entry[]>
        EmptyComponent={<EmptyData />}
        NonEmptyComponent={<ListPrograms data={data} />}
        data={data}
        isLoading={isLoading}
      />
    </Layout>
  )
}
