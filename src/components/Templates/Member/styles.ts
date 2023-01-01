import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: (theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: ${theme.color.lightMain};
    padding: ${spacing * 16}px 0;
    ${sp} {
      padding: ${spacing * 8}px 0;
    }
  `,
  container: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1440px;
    ${sp} {
      width: 375px;
    }
  `,
  titleContainer: () => css`
    display: flex;
    align-items: center;
    gap: ${spacing * 5}px;
    margin-bottom: ${spacing}px;
    ${sp} {
      gap: ${spacing}px;
    }
  `,
  title: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.black};
    ${sp} {
      font-size: ${theme.typography.heading.size.s};
    }
  `,
  subTitle: (theme) => css`
    font-size: ${theme.typography.text.size.m};
    color: ${theme.color.black};
    margin-bottom: ${spacing * 8}px;
    ${sp} {
      font-size: ${theme.typography.text.size.s};
      margin-bottom: ${spacing * 6}px;
    }
  `,
  memberCardContainer: () => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 1120px;
    gap: ${spacing * 5}px;
    ${sp} {
      width: 345px;
      gap: ${spacing * 3}px;
    }
    ::after {
      content: '';
      display: block;
      width: 350px;
      height: 0;
      ${sp} {
        width: 165px;
      }
    }
  `,
})
