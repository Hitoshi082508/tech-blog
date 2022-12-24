import { styles } from './styles'

type FooterProps = {
  title?: string
}

const Footer: React.FC<FooterProps> = ({ title = 'Default title' }) => {
  return <footer css={styles.container}>{title}</footer>
}

export default Footer
