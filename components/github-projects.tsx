'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Github, Star, GitFork } from 'lucide-react'
import Link from 'next/link'

interface Repo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    fetch('/api/github')
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.error)
        }
        if (!Array.isArray(data.repos)) {
          throw new Error('Unexpected response format')
        }
        setRepos(data.repos)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching GitHub data:', error)
        setError(error.message)
        setLoading(false)
      })
      .finally(() => {
        setMounted(true)
      })
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="bg-card">
            <CardHeader>
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-full" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-full" />
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card className="bg-destructive/10">
        <CardHeader>
          <CardTitle className="text-destructive">Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive">{error}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repos.map((repo, index) => (
        <div
          key={repo.id}
          className="opacity-0 translate-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Card className="h-full bg-card">
            <CardHeader>
              <CardTitle className="text-primary">{repo.name}</CardTitle>
              <CardDescription className="text-muted-foreground">{repo.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span>{repo.language}</span>
                <span className="flex items-center">
                  <Star className="mr-1 h-4 w-4" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center">
                  <GitFork className="mr-1 h-4 w-4" />
                  {repo.forks_count}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  )
}

