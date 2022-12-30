import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: (theme) => css`
    display: flex;
    width: 100%;
    height: 500px;
    background-color: ${theme.color.main};
    padding-top: ${spacing * 16}px;
    gap: ${spacing * 7}px;
    ${sp} {
      height: 370px;
      overflow-x: scroll;
      padding-top: ${spacing * 10}px;
    }
  `,
})
