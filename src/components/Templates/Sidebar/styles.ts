import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: () => css`
    width: 300px;
    height: 600px;
    background-color: blue;
    ${sp} {
      display: none;
    }
  `,
})
