import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const arrowPosition = (
  direction: 'left' | 'right',
  top: number,
  spTop: number,
) => {
  if (direction === 'left') {
    return css`
      justify-content: flex-end;
      top: ${top}px;
      left: 0px;
      padding-right: ${spacing * 2}px;
      border-radius: 0 100px 100px 0;
      ${sp} {
        top: ${spTop}px;
      }
    `
  } else {
    return css`
      justify-content: flex-start;
      top: ${top}px;
      right: 0px;
      padding-left: ${spacing * 2}px;
      border-radius: 100px 0 0 100px;
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
    width: 50px;
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
