import { css } from '@emotion/react'
import makeStyles from '@/styles/makeStyles'
import { spacing } from '@/styles/spacing'
import { sp } from '@/styles/breakpoint'

export const styles = makeStyles({
  container: (theme) => css`
    width: 350px;
    height: 170px;
    background-color: ${theme.color.white};
    border-radius: 10px;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
    padding: ${spacing * 4}px;
    ${sp} {
      width: 165px;
      height: 245px;
      padding: ${spacing * 4}px ${spacing * 2}px;
    }
  `,
  topContainer: () => css`
    display: flex;
    margin-bottom: ${spacing * 2}px;
    ${sp} {
      flex-direction: column;
      align-items: center;
    }
  `,
  nameGradeContainer: () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60px;
    margin-left: ${spacing * 3}px;
    ${sp} {
      align-items: center;
      height: auto;
      margin-left: 0;
    }
  `,
  name: (theme) => css`
    font-size: ${theme.typography.text.size.l};
    font-weight: ${theme.typography.weight.bold};
    color: ${theme.color.black};
    ${sp} {
      font-size: ${theme.typography.text.size.s};
    }
  `,
  gradeAndOccupation: (theme) => css`
    font-size: ${theme.typography.text.size.s};
    color: ${theme.color.black};
    ${sp} {
      font-size: ${theme.typography.text.size.xs};
    }
  `,
  introduction: (theme) => css`
    font-size: ${theme.typography.text.size.s};
    color: ${theme.color.gray};
    ${sp} {
      font-size: ${theme.typography.text.size.xs};
    }
  `,
})
