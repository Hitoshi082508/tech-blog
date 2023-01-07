import NextImage from '@/components/Atoms/NextImage'
import { Contents } from '@/types/contents'
import Link from 'next/link'
import { styles } from './styles'
import DescriptionImagePath from '../../../../assets/images/description-image.png'
type StepCardProps = {
  data?: Contents
}

const StepCard: React.FC<StepCardProps> = ({ data }) => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.descriptionContainer}>
          <h2 css={styles.descriptionTitleContainer}>
            <h2 css={styles.stepNumber}>step1</h2>
            <h2 css={styles.descriptionTitle}>
              独学でSEを目指す前に知っておくべきこと
            </h2>
          </h2>
          <div css={styles.description}>
            SEに必要なスキルや知識は、独学で身につけることが可能なのでしょうか。この記事では、あまり出費をかけずに独学でSEを目指す方法やメリット・デメリット、勉強方法などについて解説します。
          </div>
          <div>~ここにボタンを作る~</div>
        </div>
        <NextImage
          src={DescriptionImagePath}
          width={296}
          height={192}
          spWidth={315}
          spHeight={140}
          alt="参考"
        />
      </div>
    </div>
  )
}

export default StepCard
