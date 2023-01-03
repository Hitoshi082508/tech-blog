import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'

export const changePosition = (n: number) => css`
  transform: translate3d(${-109 * n}%, 0, 0);
  transition: transform 1s;
`

export const styles = makeStyles({
  container: () => css`
    width: 320px;
    height: 276px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  `,
  textContainer: (theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.color.white};
    padding: ${spacing * 2}px;
  `,
  title: (theme) => css`
    font-size: ${theme.typography.text.size.m};
    font-weight: ${theme.typography.weight.bold};
    margin-bottom: ${spacing}px;
  `,
  universityAndName: (theme) => css`
    font-size: ${theme.typography.text.size.s};
    font-weight: ${theme.typography.weight.bold};
  `,
})
