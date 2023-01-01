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

export const styles = makeStyles({
  container: () => css`
    position: relative;
  `,
})
