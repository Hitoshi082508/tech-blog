import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { sp } from '@/styles/breakpoint'

export const getHeightWidthStyle = (
  width: number,
  height: number,
  spWidth?: number,
  spHeight?: number,
) => css`
  width: ${width}px;
  height: ${height}px;
  ${sp} {
    width: ${spWidth}px;
    height: ${spHeight}px;
  }
`

export const getPercentWidth = (width: number) => css`
  ${sp} {
    width: ${width}%;
    height: 230px;
  }
`

export const borderRadius = (radius: number) => css`
  span {
    border-radius: ${radius}px;
  }
`

export const displayNone = (spNone?: boolean) => {
  if (spNone) {
    return css`
      ${sp} {
        display: none;
      }
    `
  }
}

export const styles = makeStyles({
  container: () => css`
    position: relative;
  `,
})
