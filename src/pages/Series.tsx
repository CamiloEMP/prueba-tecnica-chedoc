import { EmptyComponentWrapper } from '~/components/EmptyComponentWrapper'
import { EmptyData } from '~/components/EmptyData'
import { ErrorComponent } from '~/components/ErrorComponent'
import { ListPrograms } from '~/components/ListPrograms'
import { useSeries } from '~/hooks/useSeries'
import Layout from '~/layouts/Layout'
import type { Entry } from '~/types'

export default function Series() {
  const { data, error, isLoading } = useSeries()

  return (
    <Layout title="Popular Series">
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
