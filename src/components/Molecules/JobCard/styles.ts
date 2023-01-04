import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: (theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 260px;
    height: 320px;
    background-color: ${theme.color.white};
    border-radius: 15px;
    padding: ${spacing * 6}px ${spacing * 4}px;
    box-shadow: ${theme.shadow.main};
    ${sp} {
      width: 175px;
      height: 220px;
      padding: ${spacing * 3}px ${spacing * 2}px;
    }
  `,
  occupation: (theme) => css`
    font-size: ${theme.typography.text.size.l};
    font-weight: bold;
    color: ${theme.color.black};
    margin-bottom: ${spacing * 6}px;
    ${sp} {
      font-size: ${theme.typography.text.size.m};
      margin-bottom: ${spacing * 3}px;
    }
  `,
  description: (theme) => css`
    font-size: ${theme.typography.text.size.s};
    color: ${theme.color.black};
    margin-top: ${spacing * 6}px;
    margin-bottom: ${spacing * 5}px;
    ${sp} {
      font-size: ${theme.typography.text.size.xs};
      margin-top: ${spacing * 3}px;
      margin-bottom: ${spacing * 3}px;
    }
  `,
  more: (theme) => css`
    font-size: ${theme.typography.text.size.s};
    color: ${theme.color.gray};
    ${sp} {
      font-size: ${theme.typography.text.size.xs};
    }
  `,
})
