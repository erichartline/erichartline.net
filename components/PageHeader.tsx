type Props = {
  title: string

  subtitle: string
}

const PageHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      <h1 className="text-3xl leading-9 text-gray-900 dark:text-white tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {title}
      </h1>
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{subtitle}</p>
    </div>
  )
}

export default PageHeader
