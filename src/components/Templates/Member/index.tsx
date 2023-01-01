import MemberCard from '@/components/Molecules/MemberCard'
import { styles } from './styles'
import { MemberData } from '@/utils/member'
import NextImage from '@/components/Atoms/NextImage'
import MemberIconPath from '../../../../assets/images/member-icon.png'

const Member: React.FC = () => {
  return (
    <div css={styles.base}>
      <div css={styles.container}>
        <div css={styles.titleContainer}>
          <NextImage
            src={MemberIconPath}
            width={40}
            height={40}
            alt="メンバーのアイコン"
          />
          <h2 css={styles.title}>Member</h2>
        </div>
        <p css={styles.subTitle}>メンバー</p>
        <div css={styles.memberCardContainer}>
          {MemberData.map((item) => {
            return <MemberCard key={item.id} data={item} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Member
