import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: () => css`
    width: 780px;
    ${sp} {
      width: 90%;
    }
  `,
  title: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    margin-bottom: ${spacing * 4}px;
    ${sp} {
      font-size: ${theme.typography.heading.size.s};
    }
  `,
  categoryContainer: () => css`
    display: flex;
    gap: ${spacing * 2}px;
    margin-bottom: ${spacing * 4}px;
    ${sp} {
      margin-bottom: ${spacing * 3}px;
    }
  `,
  updatedAt: (theme) => css`
    font-size: ${theme.typography.text.size.s};
    margin-bottom: ${spacing * 6}px;
    ${sp} {
      margin-bottom: ${spacing * 4}px;
    }
  `,
  article: (theme) => css`
    margin-top: ${spacing * 8}px;
    ${sp} {
      margin-top: ${spacing * 4}px;
    }
    h2 {
      display: flex;
      align-items: center;
      width: 780px;
      min-height: 60px;
      background-color: ${theme.color.white};
      font-size: ${theme.typography.heading.size.m};
      font-weight: ${theme.typography.weight.bold};
      border-left: 8px solid ${theme.color.main};
      padding-left: ${spacing * 5}px;
      margin: ${spacing * 6}px 0;
      ${sp} {
        font-size: ${theme.typography.heading.size.xs};
        width: 100%;
        margin: ${spacing * 4}px 0;
        padding: ${spacing * 3}px ${spacing * 2}px;
      }
    }
    h3 {
      font-size: ${theme.typography.heading.size.s};
      font-weight: ${theme.typography.weight.bold};
      border-bottom: 4px solid ${theme.color.main};
      margin: ${spacing * 4}px 0;
      ${sp} {
        font-size: ${theme.typography.text.size.l};
        width: 100%;
        margin: ${spacing * 3}px 0;
      }
    }
    img {
      border-radius: 15px;
      margin: ${spacing * 6}px 0;
    }
  `,
})
