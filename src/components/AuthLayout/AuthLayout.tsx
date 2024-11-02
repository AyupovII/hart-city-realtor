import styles from './AuthLayout.module.scss'
import 'swiper/css/pagination';
import 'swiper/css';
import MainSlider from '../MainSlider/MainSlider';
import logoIcon from '../../assets/svg/logo.svg'

interface AuthLayoutProps {
  children: React.ReactNode
}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className={styles.auth}>
      <MainSlider />
      <div className={styles.auth__component}>
        <img className={styles.auth__logo} src={logoIcon} alt="logo" />
        {children}
        </div>
    </div>
  )
}

export default AuthLayout