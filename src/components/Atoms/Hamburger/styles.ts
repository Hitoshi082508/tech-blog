import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'

export const styles = makeStyles({
  container: (theme) => css``,
  icon: () => css``,
  navContainer: (theme) => css`
    min-width: 100%;
    height: calc(100vh - 60px);
    background-color: ${theme.color.white};
    position: fixed;
    top: 60px;
    left: 0;
    z-index: 1;
    border-top: 1px solid ${theme.color.gray};
    list-style: none;
    padding: 0;
    animation-name: height;
    animation-duration: 0.5s;
    @keyframes height {
      from {
        height: 0;
      }
      to {
        height: calc(100vh - 60px);
      }
    }
  `,
  nav: (theme) => css`
    display: inline-block;
    width: 100%;
    height: 50px;
    font-size: ${theme.typography.text.size.s};
    line-height: 50px;
    padding-left: ${spacing * 10}px;
    border-bottom: 1px solid ${theme.color.gray};
    :visited {
      color: ${theme.color.black};
    }
    animation-name: opacity;
    animation-duration: 0.5s;
    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  buttonContainer: () => css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: ${spacing * 6}px;
  `,
  button: (theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 285px;
    height: 45px;
    background-color: ${theme.color.main};
    border-radius: 35px;
    font-size: ${theme.typography.text.size.m};
    font-weight: ${theme.typography.weight.bold};
    gap: ${spacing}px;
    animation-name: opacity;
    animation-duration: 0.3s;
    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    :visited {
      color: ${theme.color.white};
    }
  `,
})
