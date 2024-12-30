import { NextResponse } from 'next/server'

export async function GET() {
  const username = 'KKbutter'
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    console.error('GITHUB_TOKEN is not set')
    return NextResponse.json({ error: 'GitHub token is not configured' }, { status: 500 })
  }

  try {
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
      headers: { Authorization: `token ${token}` },
    })

    if (!reposRes.ok) {
      throw new Error(`GitHub API error: ${reposRes.statusText}`)
    }

    const reposData = await reposRes.json()

    if (!Array.isArray(reposData)) {
      throw new Error('Unexpected response format from GitHub API')
    }

    return NextResponse.json({ repos: reposData })
  } catch (error) {
    console.error('Error fetching GitHub data:', error)
    return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 })
  }
}

