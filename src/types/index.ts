import { StaticImageData } from 'next/legacy/image'

export type MemberType = {
  id: number
  eyecatchPath: StaticImageData
  alt: string
  name: string
  grade_and_occupation: string
  introduction: string
}
