import querystring from "querystring"

const clientID = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${clientID}:${clientSecret}`).toString("base64")
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  })

  return response.json()
}

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`

const getTopTracks = async () => {
  const json = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${json.access_token}`,
    },
  })
}

export { getTopTracks }
