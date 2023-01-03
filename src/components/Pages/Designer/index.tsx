import JobDescription from '@/components/Templates/JobDescription'
import JobList from '@/components/Templates/JobList'
import { theme } from '@/styles/theme'
import EngineerIconPath from '../../../../assets/images/engineer-icon.png'
import DescriptionImagePath from '../../../../assets/images/description-image.png'

const DesignerPage: React.FC = () => {
  return (
    <div>
      <JobDescription
        iconPath={EngineerIconPath}
        iconAlt="エンジニアのアイコン"
        title="Webデザイナーになりたい"
        descriptionTitle="Webデザイナーとは？"
        description="そもそもエンジニアとは、「工学（エンジニアリング）に関する専門的な知識やスキルを持った人材」を指す言葉で、日本では「技術者」とも呼ばれます。IT技術が進んだ現代では、インターネット関係のITの専門知識やスキルを備えた「ITエンジニア」が活躍しています。
        現代社会を陰で支えている縁の下の力持ち、それがエンジニアです。エンジニアはIT業界を中心に不足しており、今後も社会で必要とされる職業であることは間違いないでしょう。"
        thumbnailPath={DescriptionImagePath}
        thumbnailAlt="デザイナーの説明画像"
      />
      <JobList
        title="Detailed Job"
        subTitle="デザイナーの中でもこんな種類があるよ"
        backgroundColor={theme.color.main}
        fontColor={theme.color.white}
      />
      <JobList
        title="Other Job"
        subTitle="他にも自分に合った職業を見つけよう"
        backgroundColor={theme.color.lightMain}
        fontColor={theme.color.black}
      />
    </div>
  )
}

export default DesignerPage
