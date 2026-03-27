import { useState, useEffect } from 'react'

/**
 * Fetches a GitHub user's public profile (avatar + status).
 * Uses the REST API — no auth required for public data.
 * Status requires the GraphQL API with a token, so we fall back
 * to the bio field from the REST API as the "status" text.
 */
export default function useGitHubProfile(username) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!username) return
    let cancelled = false

    async function fetchProfile() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`)
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
        const json = await res.json()
        if (!cancelled) {
          setData({
            avatarUrl: json.avatar_url,
            name: json.name,
            bio: json.bio,
            company: json.company,
            location: json.location,
            blog: json.blog,
            followers: json.followers,
            publicRepos: json.public_repos,
          })
        }
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchProfile()
    return () => { cancelled = true }
  }, [username])

  return { data, loading, error }
}
