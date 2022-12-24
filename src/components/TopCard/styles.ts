import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: () => css`
    max-width: 366px;
  `,
  eyecatchContainer: () => css`
    position: relative;
    width: 366px;
    height: 220px;
    margin-bottom: ${spacing * 2}px;
    ${sp} {
      width: 310px;
      height: 186px;
    }
  `,
  eyecatch: () => css`
    border-radius: 15px;
  `,
  title: (theme) => css`
    font-size: ${theme.typography.text.size.l};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.white};
    margin-bottom: ${spacing * 3}px;
  `,
  categoryContainer: () => css`
    display: flex;
    gap: ${spacing * 2}px;
  `,
  category: (theme) => css`
    width: fit-content;
    font-size: ${theme.typography.text.size.xs};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.white};
    border: 1px solid ${theme.color.white};
    border-radius: 20px;
    padding: ${spacing / 2}px ${spacing * 2}px;
  `,
})
