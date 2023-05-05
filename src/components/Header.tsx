import { CONTAINER_CLASSNAME } from '~/constants'

export function Header() {
  return (
    <header className="w-full text-white bg-blue-400">
      <div className={`${CONTAINER_CLASSNAME} flex justify-between w-full gap-4`}>
        <h1 className="text-2xl font-semibold">DEMO Streaming </h1>
        <ul className="flex items-center gap-2">
          <li>Log in</li>
          <li>
            <button>Start your free trial</button>
          </li>
        </ul>
      </div>
    </header>
  )
}
