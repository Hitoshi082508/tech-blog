import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      main: string
    }
    typography: {
      text: {
        size: {
          m: string
        }
      }
      weight: {
        bold: number
      }
    }
  }
}
