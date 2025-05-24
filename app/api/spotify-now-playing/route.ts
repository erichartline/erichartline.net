import { getNowPlaying } from "@/lib/spotify"
import { NextResponse } from "next/server"

type Artist = {
  external_urls: {
    spotify: string
  }
  href: string
  id: string
  name: string
  type: string
  uri: string
}

export async function GET() {
  const response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    return NextResponse.json({ isPlaying: false })
  }

  const json = await response.json()
  const isPlaying = json.is_playing
  const title = json.item.name
  const artist = json.item.artists.map((item: Artist) => item.name).join(", ")
  const album = json.item.album.name
  const albumImageUrl = json.item.album.images[0].url
  const songUrl = json.item.external_urls.spotify

  return NextResponse.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  })
}