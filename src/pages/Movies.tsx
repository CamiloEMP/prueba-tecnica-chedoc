import { ListItems } from '~/components/ListItems'
import { Loader } from '~/components/Loader'
import { useMovies } from '~/hooks/useMovies'
import NavLayout from '~/layouts/NavLayout'

export default function Movies() {
  const { data, error, isLoading } = useMovies()

  return (
    <NavLayout title="Popular titles">
      {error ? <div>{error}</div> : null}
      {isLoading ? <Loader /> : <ListItems data={data} />}
    </NavLayout>
  )
}
