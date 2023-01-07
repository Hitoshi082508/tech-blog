import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: (theme) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 160px;
    position: relative;
    background-color: ${theme.color.deepGray};
    color: ${theme.color.white};
  `,
  container: () => css`
    display: flex;
    justify-content: space-around;

    width: 1120px;
    ${sp} {
      padding: 0 ${spacing * 3}px;
    }
  `,
  logoContainer: () => css`
    display: flex;
    flex-direction: column;
  `,
  logoTitle: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
  `,
  logoSubTitle: (theme) => css`
    font-size: ${theme.typography.text.size.xs};
  `,

  navContainer: (theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    font-size: ${theme.typography.text.size.m};
    font-weight: ${theme.typography.weight.bold};
    list-style: none;
    gap: ${spacing * 5}px;
    ${sp} {
      display: none;
    }
  `,
  nav: (theme) => css`
    border-bottom: 1px solid ${theme.color.white};
    :visited {
      color: ${theme.color.white};
    }
  `,
  contact: (theme) => css`
    display: flex;
    align-items: center;
    height: 45px;
    background-color: ${theme.color.main};
    border-radius: 35px;
    color: ${theme.color.white};
    gap: ${spacing}px;
    padding: 0 ${spacing * 3}px;
    :visited {
      color: ${theme.color.white};
    }
  `,
  copyRight: (theme) => css`
    font-size: ${theme.typography.text.size.s};
  `,
})
