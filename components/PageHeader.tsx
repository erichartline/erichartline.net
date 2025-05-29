type Props = {
  title: string

  subtitle: string
}

const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="pt-8 pb-10 space-y-4 md:space-y-6">
      <h1 className="text-3xl leading-9 text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 relative">
        <span className="relative z-10">
          {title}
          <span className="absolute bottom-0 left-0 w-full h-3 bg-red-200 dark:bg-red-900 opacity-30 -z-10"></span>
        </span>
      </h1>
      <p className="text-xl leading-7 text-gray-600 dark:text-gray-300 max-w-3xl">{subtitle}</p>
    </div>
  )
}

export default PageHeader
