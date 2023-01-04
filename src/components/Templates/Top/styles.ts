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
    overflow-x: scroll;
    gap: ${spacing * 5}px;
    ${sp} {
      padding: 0 calc((100vw - 310px) / 2);
      gap: calc(100vw - 310px);
    }
    ::-webkit-scrollbar {
      display: none;
    }
  `,
})
