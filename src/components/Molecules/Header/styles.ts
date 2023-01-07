import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  base: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    position: relative;
  `,
  container: () => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 1120px;
    ${sp} {
      padding: 0 ${spacing * 3}px;
    }
  `,
  logo: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
  `,
  navContainer: (theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 45px;
    font-size: ${theme.typography.text.size.m};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.black};
    list-style: none;
    gap: ${spacing * 5}px;
    ${sp} {
      display: none;
    }
  `,
  nav: (theme) => css`
    :visited {
      color: ${theme.color.black};
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
})
