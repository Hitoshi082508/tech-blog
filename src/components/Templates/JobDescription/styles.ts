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
  container: () => css`
    width: 1120px;
    ${sp} {
      width: 345px;
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
    ${sp} {
      font-size: ${theme.typography.heading.size.s};
    }
  `,
  descriptionContainer: (theme) => css`
    display: flex;
    width: 1120px;
    height: 320px;
    background-color: ${theme.color.gray};
    border-radius: 15px;
    gap: ${spacing * 4}px;
    padding: ${spacing * 8}px;
    margin-bottom: ${spacing * 6}px;
    ${sp} {
      flex-direction: column;
      width: 345px;
      height: auto;
      padding: ${spacing * 4}px;
      margin-bottom: ${spacing * 4}px;
    }
  `,
  descriptionTitle: (theme) => css`
    font-size: ${theme.typography.heading.size.s};
    font-weight: ${theme.typography.weight.bold};
    margin-bottom: ${spacing * 4}px;
    ${sp} {
      font-size: ${theme.typography.heading.size.xs};
      margin-bottom: ${spacing * 2}px;
    }
  `,
  description: (theme) => css`
    width: 660px;
    font-size: ${theme.typography.text.size.m};
    ${sp} {
      width: 305px;
      font-size: ${theme.typography.text.size.s};
    }
  `,
  arrowContainer: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  arrowText: (theme) => css`
    font-size: ${theme.typography.heading.size.s};
    font-weight: ${theme.typography.weight.bold};
    margin-top: ${spacing * 7}px;
    margin-bottom: ${spacing * 10}px;
    ${sp} {
      font-size: ${theme.typography.heading.size.xs};
      margin-top: ${spacing * 4}px;
      margin-bottom: ${spacing * 8}px;
    }
  `,
})
