export interface Inews {
    source: Source
    author: string
    title: string
    description: any
    url: string
    urlToImage: any
    publishedAt: string
    content: any
  }

  export interface Source {
    id: string
    name: string
  }