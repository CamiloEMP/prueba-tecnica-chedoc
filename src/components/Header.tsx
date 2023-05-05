import { CONTAINER_CLASSNAME } from '~/constants'

export function Header() {
  return (
    <header className="w-full text-white bg-blue-400">
      <div className={`${CONTAINER_CLASSNAME} flex justify-between flex-wrap w-full gap-4`}>
        <h1 className="text-5xl font-semibold">DEMO Streaming </h1>
        <ul className="flex items-center gap-4">
          <li>Log in</li>
          <li>
            <button className="px-2 py-1 bg-neutral-800">Start your free trial</button>
          </li>
        </ul>
      </div>
    </header>
  )
}
