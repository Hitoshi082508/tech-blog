import { styles } from './styles'

type HeaderProps = {
  title?: string
}

const Header: React.FC<HeaderProps> = ({ title = 'Default title' }) => {
  return <header css={styles.container}>{title}</header>
}

export default Header
