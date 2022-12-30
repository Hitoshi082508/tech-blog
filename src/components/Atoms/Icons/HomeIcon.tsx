/* eslint-disable react/display-name */
import { CustomSvgProps } from '@/components/Atoms/Icons/svgr'
import { useTheme } from '@emotion/react'
export default ({ fill, stroke, ...props }: CustomSvgProps): JSX.Element => {
  const theme = useTheme()
  return (
    <svg
      viewBox="0 0 28 29"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill ? theme.color[fill] : 'none'}
      stroke={stroke ? theme.color[stroke] : 'none'}
      {...props}
    >
      <path d="M11.664 22.55v-5.832h4.667v5.833a1.17 1.17 0 0 0 1.166 1.167h3.5a1.17 1.17 0 0 0 1.167-1.167v-8.167h1.983c.537 0 .794-.665.385-1.015L14.78 4.584a1.176 1.176 0 0 0-1.563 0L3.462 13.37a.581.581 0 0 0 .385 1.015h1.984v8.167a1.17 1.17 0 0 0 1.166 1.167h3.5a1.17 1.17 0 0 0 1.167-1.167Z" />
    </svg>
  )
}
