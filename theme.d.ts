import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      main: string
      white: string
    }
    typography: {
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
