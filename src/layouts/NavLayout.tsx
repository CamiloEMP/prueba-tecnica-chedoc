const CONTAINER_CLASSNAME = 'max-w-screen-xl mx-auto w-full py-4'

interface NavProps {
  title: string
  children: React.ReactNode
}

export default function NavLayout({ title, children }: NavProps) {
  return (
    <>
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
      <main>
        <section className="bg-neutral-800">
          <div className={`${CONTAINER_CLASSNAME}`}>
            <h2 className="text-lg font-medium text-white bg-neutral-800">{title}</h2>
          </div>
        </section>
        <section className={CONTAINER_CLASSNAME}>{children}</section>
      </main>
    </>
  )
}
