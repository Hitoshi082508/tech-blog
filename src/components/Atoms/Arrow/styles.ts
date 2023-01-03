import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const arrowPosition = (
  direction: 'left' | 'right',
  top: number,
  spTop: number,
  left: number,
  right: number,
) => {
  if (direction === 'left') {
    return css`
      justify-content: flex-end;
      top: ${top}px;
      left: ${left}px;
      padding-right: ${spacing * 2}px;
      ${sp} {
        top: ${spTop}px;
      }
    `
  } else {
    return css`
      justify-content: flex-start;
      top: ${top}px;
      right: ${right}px;
      padding-left: ${spacing * 2}px;
      ${sp} {
        top: ${spTop}px;
      }
    `
  }
}

export const styles = makeStyles({
  container: (theme) => css`
    position: absolute;
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: ${theme.color.white};
    border-radius: 50%;
    cursor: pointer;
  `,
  icon: (theme) => css`
    color: ${theme.color.black};
    width: 30px;
    height: 30px;
  `,
})
