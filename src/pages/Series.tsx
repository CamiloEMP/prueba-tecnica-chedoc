import { ListItems } from '~/components/ListItems'
import { Loader } from '~/components/Loader'
import { useSeries } from '~/hooks/useSeries'
import NavLayout from '~/layouts/NavLayout'

export default function Series() {
  const { data, error, isLoading } = useSeries()

  return (
    <NavLayout title="Popular titles">
      {error ? <div>{error}</div> : null}
      {isLoading ? <Loader /> : <ListItems data={data} />}
    </NavLayout>
  )
}
