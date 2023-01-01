import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      main: string
      lightMain: string
      white: string
      black: string
      gray: string
    }
    typography: {
      heading: {
        size: {
          m: string
          s: string
        }
      }
      text: {
        size: {
          l: '18px'
          m: '16px'
          s: '14px'
          xs: '12px'
        }
      }
      weight: {
        bold: 'bold'
      }
    }
  }
}
