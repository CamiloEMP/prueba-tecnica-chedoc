import type { Entry } from '~/types'

import { Card } from './Card'

interface ListItemsProps {
  data: Entry[]
}

export function ListItems({ data }: ListItemsProps) {
  return (
    <section className="justify-center wrapper-items sm:justify-items-start">
      {data.map(item => (
        <Card key={item.title} title={item.title} urlImg={item.images['Poster Art'].url} />
      ))}
    </section>
  )
}
