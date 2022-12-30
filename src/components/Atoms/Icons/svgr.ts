import React from 'react'
import { Theme } from '@emotion/react'

type Color = keyof Theme['color']

export interface CustomSvgProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  fill?: Color
  stroke?: Color
}
