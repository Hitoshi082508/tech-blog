import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'

export const styles = makeStyles({
  container: (theme) => css`
    display: flex;
    align-items: center;
    width: fit-content;
    height: 30px;
    border-radius: 20px;
    border: 1px solid ${theme.color.deepGray};
    gap: ${spacing}px;
    padding: 0 ${spacing * 3}px;
  `,
  hash: (theme) => css`
    font-size: ${theme.typography.text.size.s};
    color: ${theme.color.deepGray};
  `,
  category: (theme) => css`
    font-size: ${theme.typography.text.size.s};
    color: ${theme.color.black};
  `,
})
