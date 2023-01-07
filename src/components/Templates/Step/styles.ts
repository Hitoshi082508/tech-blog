import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: () => css`
    display: flex;
    justify-content: center;
    width: 100%;
  `,
  container: (theme) => css`
    width: 100%;
    background-color: ${theme.color.main};
    ${sp} {
      width: 375px;
    }
  `,
  titleContainer: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${spacing * 3}px;
    margin: ${spacing * 10}px 0;
    ${sp} {
      flex-direction: column;
      margin: 0;
      margin-top: ${spacing * 8}px;
      margin-bottom: ${spacing * 4}px;
    }
  `,
  title: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.white};
    ${sp} {
      font-size: ${theme.typography.heading.size.s};
    }
  `,
})
