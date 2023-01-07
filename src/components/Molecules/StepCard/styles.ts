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
    display: flex;
    align-items: center;
    padding: ${spacing * 3}px;
    width: 1120px;
    height: 240px;
    background-color: ${theme.color.white};
    margin-bottom: ${spacing * 5}px;
    border-radius: 20px;
    ${sp} {
      flex-direction: column-reverse;
      width: 345px;
      height: 430px;
    }
  `,
  descriptionContainer: (theme) => css`
    width: 700px;
    margin-right: ${spacing * 5}px;
    background-color: ${theme.color.white};
    ${sp} {
      margin-right: 0;
      width: 315px;
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  descriptionTitleContainer: (theme) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${spacing * 2}px;
    border-bottom: solid ${theme.color.gray};
    ${sp} {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  stepNumber: (theme) => css`
    margin-right: ${spacing * 3}px;
    color: ${theme.color.main};
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
  `,
  descriptionTitle: (theme) => css`
    font-size: ${theme.typography.heading.size.s};
    font-weight: ${theme.typography.weight.bold};
    ${sp} {
      font-size: ${theme.typography.heading.size.xs};
      margin-bottom: ${spacing * 2}px;
    }
  `,
  description: (theme) => css`
    margin-top: ${spacing * 2}px;
    font-size: ${theme.typography.text.size.m};
    ${sp} {
      width: 315px;
      font-size: ${theme.typography.text.size.s};
    }
  `,
})
