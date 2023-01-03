import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: () => css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding-top: ${spacing * 16}px;
    padding-bottom: ${spacing * 12}px;
    ${sp} {
      padding-top: ${spacing * 8}px;
      padding-bottom: ${spacing * 8}px;
    }
  `,
  titleContainer: () => css`
    display: flex;
    align-items: center;
    width: 1120px;
    gap: ${spacing * 3}px;
    ${sp} {
      width: 345px;
      gap: ${spacing}px;
    }
  `,
  title: (theme) => css`
    font-size: ${theme.typography.heading.size.m};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.black};
    ${sp} {
      font-size: ${theme.typography.heading.size.s};
    }
  `,
  subTitle: (theme) => css`
    width: 1120px;
    font-size: ${theme.typography.text.size.m};
    color: ${theme.color.black};
    ${sp} {
      width: 345px;
      font-size: ${theme.typography.text.size.m};
    }
  `,
  voiceCardContainer: () => css`
    display: flex;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    overflow-x: scroll;
    gap: ${spacing * 6}px;
    padding-top: ${spacing * 7}px;
    padding-bottom: ${spacing * 10}px;
    ::-webkit-scrollbar {
      display: none;
    }
    ${sp} {
      gap: ${spacing * 3}px;
      padding-top: ${spacing * 6}px;
      padding-bottom: ${spacing * 6}px;
    }
  `,
  button: (theme) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 50px;
    background-color: ${theme.color.main};
    color: ${theme.color.white};
    font-size: ${theme.typography.text.size.m};
    font-weight: ${theme.typography.weight.bold};
    border-radius: 50px;
  `,
})
