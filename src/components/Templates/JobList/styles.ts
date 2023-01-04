import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const getBackgroundColor = (backgroundColor: string) => css`
  background-color: ${backgroundColor};
`

export const getFontColor = (fontColor: string) => css`
  color: ${fontColor};
`

export const styles = makeStyles({
  base: () => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${spacing * 16}px 0;
    ${sp} {
      padding: ${spacing * 8}px 0;
    }
  `,
  container: () => css`
    width: 1120px;
    ${sp} {
      width: 345px;
    }
  `,
  titleContainer: () => css`
    display: flex;
    align-items: center;
    gap: ${spacing * 3}px;
    ${sp} {
      gap: ${spacing}px;
    }
  `,
  icon: () => css`
    width: 30px;
    height: 30px;
  `,
  title: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    ${sp} {
      font-size: ${theme.typography.heading.size.s};
    }
  `,
  subTitle: (theme) => css`
    font-size: ${theme.typography.text.size.m};
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
    gap: ${spacing * 2}px;
    ${sp} {
      width: 345px;
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
