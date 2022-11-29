export type Content = {
  contents: Contents
}

export type Contents = {
  category: {
    createdAt: Date
    id: string
    name: string
    publishedAt: Date
    revisedAt: Date
    updatedAt: Date
  }
  content: string
  createdAt: Date
  eyecatch: {
    height: number
    url: string
    width: number
  }
  id: string
  publishedAt: Date
  revisedAt: Date
  title: string
  updatedAt: Date
}
