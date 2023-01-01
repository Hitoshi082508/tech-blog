import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: ${spacing * 4}px;
    padding-bottom: ${spacing * 16}px;
    ${sp} {
      padding-top: ${spacing * 8}px;
      padding-bottom: ${spacing * 8}px;
    }
  `,
  container: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1120px;
    ${sp} {
      width: 375px;
    }
  `,
  title: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    margin: ${spacing}px 0;
    ${sp} {
      font-size: ${theme.typography.heading.size.s};
    }
  `,
  subTitle: (theme) => css`
    font-size: ${theme.typography.text.size.l};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.main};
    margin-bottom: ${spacing * 3}px;
    ${sp} {
      margin-bottom: ${spacing * 6}px;
    }
  `,
  description: (theme) => css`
    width: 1000px;
    font-size: ${theme.typography.text.size.s};
    margin-bottom: ${spacing * 10}px;
    ${sp} {
      width: 330px;
      margin-bottom: ${spacing * 6}px;
    }
  `,
  aboutCardContainer: () => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${spacing * 2}px;
  `,
})
