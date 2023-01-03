import { StaticImageData } from 'next/legacy/image'

export type MemberType = {
  id: number
  eyecatchPath: StaticImageData
  alt: string
  name: string
  grade_and_occupation: string
  introduction: string
}

export type JobType = {
  id: number
  link: string
  occupation: string
  iconPath: StaticImageData
  description: string
}

export type VoiceType = {
  id: number
  thumbnailPath: StaticImageData
  alt: string
  title: string
  university_and_name: string
  href: string
}
