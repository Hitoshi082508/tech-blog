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
    justify-content: center;
    align-items: center;
    gap: ${spacing * 6}px;
    width: 1120px;
    height: 240px;
    background-color: ${theme.color.white};
    border-radius: 20px;
    margin-bottom: ${spacing * 5}px;
    ${sp} {
      flex-direction: column-reverse;
      gap: 0;
      width: 345px;
      height: 430px;
    }
  `,
  descriptionContainer: (theme) => css`
    width: 650px;
    background-color: ${theme.color.white};
    ${sp} {
      width: 315px;
    }
  `,
  descriptionTitleContainer: (theme) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${spacing * 2}px;
    border-bottom: 1px solid ${theme.color.gray};
    ${sp} {
      flex-direction: column;
      align-items: flex-start;
    }
  `,
  stepNumber: (theme) => css`
    color: ${theme.color.main};
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    margin-right: ${spacing * 3}px;
  `,
  number: (theme) => css`
    font-size: ${theme.typography.heading.size.xl};
    margin-left: ${spacing * 1}px;
    ${sp} {
      font-size: ${theme.typography.heading.size.m};
    }
  `,
  descriptionTitle: (theme) => css`
    font-size: ${theme.typography.heading.size.s};
    font-weight: ${theme.typography.weight.bold};
    ${sp} {
      font-size: ${theme.typography.heading.size.xs};
    }
  `,
  description: (theme) => css`
    font-size: ${theme.typography.text.size.m};
    margin-top: ${spacing * 4}px;
    ${sp} {
      width: 315px;
      font-size: ${theme.typography.text.size.s};
      margin-top: 0;
    }
  `,
  button: (theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    background-color: ${theme.color.main};
    border-radius: 5px;
    margin-left: auto;
    font-size: ${theme.typography.text.size.m};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.white};
    ${sp} {
      font-size: ${theme.typography.text.size.s};
    }
  `,
})
