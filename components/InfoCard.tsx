import { FiArrowUpRight } from "react-icons/fi"

type Props = {
  /** List of badges to display at the bottom of the card */
  badges: string[]
  /** Description of project/item */
  description: string
  /** Optional image to place at top of card */
  image?: string
  /** Link href */
  link: string
  /** Title of card */
  title: string
}

const InfoCard = ({ badges = [], description, image, link, title }: Props) => {
  return (
    <div className="p-6 flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-600">
      {image && <img className="w-full" src={image} alt={image} />}
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-600 dark:text-white">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}{" "}
          <FiArrowUpRight
            style={{ display: "inline-flex", marginLeft: "4px" }}
          />
        </a>
      </h5>
      <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
        {description}
      </p>
      <div className="flex flex-col mt-4 flex-grow justify-end">
        <ul className="flex flex-wrap">
          {badges.map((item) => (
            <li
              className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default InfoCard
