import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { sp } from '@/styles/breakpoint'
import { spacing } from '@/styles/spacing'

export const styles = makeStyles({
  base: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 440px;
  `,
  container: () => css`
    position: relative;
    display: flex;
    width: 1120px;
    height: 300px;
    background-image: url('/assets/images/online-background.jpg');
    padding: ${spacing * 3}px ${spacing * 15}px;
    ${sp} {
      width: 345px;
      height: 230px;
      border-radius: 25px;
      padding: ${spacing * 6}px ${spacing * 5}px;
    }
  `,
  background: () => css`
    z-index: -1;
  `,
  textContainer: () => css`
    margin-left: ${spacing * 20}px;
    ${sp} {
      margin-left: 0;
    }
  `,
  title: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.white};
    margin-top: ${spacing * 10}px;
    margin-bottom: ${spacing * 3}px;
    ${sp} {
      font-size: ${theme.typography.heading.size.s};
      margin-top: 0;
    }
  `,
  subTitle: (theme) => css`
    font-size: ${theme.typography.text.size.m};
    color: ${theme.color.white};
    margin-bottom: ${spacing * 8}px;
    ${sp} {
      font-size: ${theme.typography.text.size.s};
      margin-bottom: ${spacing * 3}px;
    }
  `,
  button: (theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 340px;
    height: 65px;
    background-color: ${theme.color.white};
    border-radius: 50px;
    color: ${theme.color.main};
    font-size: ${theme.typography.text.size.l};
    font-weight: ${theme.typography.weight.bold};
    z-index: 1;
    ${sp} {
      width: 300px;
      height: 60px;
      font-size: ${theme.typography.text.size.m};
    }
  `,
})
