import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: (theme) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${theme.color.main};
    padding: ${spacing * 16}px 0;
    ${sp} {
      padding: ${spacing * 8}px 0;
    }
  `,
  container: () => css`
    width: 1120px;
    ${sp} {
      width: 375px;
    }
  `,
  titleContainer: () => css`
    display: flex;
    gap: ${spacing * 3}px;
    ${sp} {
      gap: ${spacing}px;
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
  subTitle: (theme) => css`
    font-size: ${theme.typography.text.size.m};
    color: ${theme.color.white};
    margin-bottom: ${spacing * 7}px;
    ${sp} {
      font-size: ${theme.typography.text.size.s};
      margin-bottom: ${spacing * 6}px;
    }
  `,
  jobCardContainer: () => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 1120px;
    gap: ${spacing * 5}px;
    ${sp} {
      width: 375px;
    }
    ::after {
      content: '';
      display: block;
      width: 260px;
      height: 0;
      ${sp} {
        width: 165px;
      }
    }
  `,
})
