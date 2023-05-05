import defaultImage from '~/assets/placeholder.png'

interface CardProps {
  title: string
  urlImg?: string
  altImage?: string
  children?: React.ReactNode
}

export function Card({ title, altImage, urlImg, children }: CardProps) {
  return (
    <div className="relative flex flex-col items-center gap-2 border-2 border-transparent w-44 h-72 hover:border-gray-300">
      <img
        alt={altImage ?? title}
        className="object-cover w-full h-full bg-cover bg-black/90"
        src={urlImg ?? defaultImage}
      />
      <div>
        <span className="text-medium">{title}</span>
      </div>
      {children ?? null}
    </div>
  )
}
