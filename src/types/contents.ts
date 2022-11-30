export type Content = {
  contents: Contents[]
}

export type Contents = {
  category: {
    createdAt: string
    id: string
    name: string
    publishedAt: string
    revisedAt: string
    updatedAt: string
  }
  content: string
  createdAt: string
  excerpt: string
  eyecatch: {
    height: number
    url: string
    width: number
  }
  id: string
  publishedAt: string
  revisedAt: string
  title: string
  updatedAt: string
}

export type Params = {
  params: {
    id: string
  }
  locales?: string
  locale?: string
  defaultLocale?: string
}
