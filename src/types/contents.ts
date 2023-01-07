export type Content = {
  contents: Contents[]
}

export type StepContent = {
  contents: Steps[]
}

export type Contents = {
  category: {
    createdAt: string
    id: string
    name: string
    publishedAt: string
    revisedAt: string
    updatedAt: string
  }[]
  content: string
  createdAt: string
  excerpt: string
  eyecatch: {
    height: number
    url: string
    width: number
  }
  eyecatchAlt: string
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  updatedAt: string
}

export type Steps = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  step_number: number
  title: string
  excerpt: string
  eyecatch: {
    url: string
    height: 630
    width: 1200
  }
  contents: string
  permalink: string
  category: {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    name: string
  }
}

export type Params = {
  params: {
    id: string
  }
  locales?: string
  locale?: string
  defaultLocale?: string
}
