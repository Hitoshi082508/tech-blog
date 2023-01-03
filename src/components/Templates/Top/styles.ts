import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { sp } from '@/styles/breakpoint'
import { spacing } from '@/styles/spacing'

export const styles = makeStyles({
  container: (theme) => css`
    position: relative;
    width: 100%;
    height: 500px;
    background-color: ${theme.color.main};
    padding-top: ${spacing * 16}px;
    ${sp} {
      height: 370px;
      padding-top: ${spacing * 10}px;
    }
  `,
  topCardContainer: () => css`
    display: flex;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    gap: ${spacing * 7}px;
  `,
})
