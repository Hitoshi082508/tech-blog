import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: (theme) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${theme.color.lightMain};
  `,
  container: () => css`
    display: flex;
    justify-content: center;
    width: 1120px;
    gap: ${spacing * 8}px;
    margin-top: ${spacing * 10}px;
    ${sp} {
      margin-top: ${spacing * 6}px;
    }
  `,
})
