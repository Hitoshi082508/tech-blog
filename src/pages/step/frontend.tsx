import JobDescription from '@/components/Templates/JobDescription'
import EngineerIconPath from '../../../assets/images/engineer-icon.png'
import DescriptionImagePath from '../../../assets/images/description-image.png'
import Step from '@/components/Templates/Step'
import { StepContent, Steps } from '@/types/contents'
import { client } from '@/lib/client'

export const getStaticProps = async () => {
  const id = 'uvvyd49h9z'
  const data: StepContent = await client.get({
    endpoint: 'step',
    queries: { filters: `category[equals]${id}`, orders: 'step_number' },
  })
  console.log(data.contents)

  return {
    props: {
      data: data.contents,
    },
  }
}

type FrontendProps = {
  data: Steps[]
}

const FrontendPage: React.FC<FrontendProps> = ({ data }) => {
  return (
    <div>
      <JobDescription
        iconPath={EngineerIconPath}
        iconAlt="エンジニアのアイコン"
        title="フロントエンドエンジニアになりたい"
        descriptionTitle="フロントエンドエンジニアとは？"
        description="SEの仕事は、顧客の要求から仕様を決定し、大まかな設計をするまでの情報システム開発における上流工程を担当します。その際、予算や人員、進捗管理などのマネジメント業務も大切な仕事です。ただし、企業や開発チームによってSEの仕事内容は異なることもあります。SEが担当する上流工程は「要求分析・要件定義」「基本設計」「詳細設計」「テスト」などの業務です。"
        thumbnailPath={DescriptionImagePath}
        thumbnailAlt="デザイナーの説明画像"
      />
      <Step title="フロントエンジニアになるステップ" data={data} />
    </div>
  )
}

export default FrontendPage
