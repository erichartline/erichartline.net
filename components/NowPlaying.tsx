"use client"

import React from "react"
import useSWR from "swr"
import { FaSpotify } from "react-icons/fa"
import fetcher from "../lib/fetcher"

const NowPlaying = () => {
  const { data } = useSWR("/api/spotify-now-playing", fetcher)

  const nowPlaying = !!data?.songUrl

  return (
    <div className="inline-flex mt-2">
      <FaSpotify className="h-4 w-4 mt-1 mr-2 text-green-500" />
      <span className="inline-flex">
        {nowPlaying ? (
          <React.Fragment>
            <span className="mr-2 text-base text-gray-600 dark:text-gray-300">
              <em>Now Playing...</em>
            </span>
            <a
              className="text-gray-800 dark:text-gray-100 text-base hover:text-green-600 dark:hover:text-green-400"
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer">
              {data.title}
            </a>
          </React.Fragment>
        ) : (
          <span className="text-gray-800 dark:text-gray-100 text-base">Not Playing</span>
        )}
        <span className="mx-2 text-gray-500 dark:text-gray-400 hidden sm:block">{" – "}</span>
        <span className="text-gray-500 dark:text-gray-400 text-base">
          {data?.artist ?? "Spotify"}
        </span>
      </span>
    </div>
  )
}

export default NowPlaying
