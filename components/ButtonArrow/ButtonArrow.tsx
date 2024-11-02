import styles from './ButtonArrow.module.scss'
import iconArrowLight from '../../assets/svg/arrow-light.svg'
import iconArrowDark from '../../assets/svg/arrow-dark.svg'
interface ButtonArrowProps {
  direction: "left" | "right"
  size: "small" | "medium"
  theme: "light" | "dark"
  className?: string
}

const ButtonArrow: React.FC<ButtonArrowProps> = ({ direction = "right", size = "medium", className, theme = 'light' }) => {
  return (
    <div className={`${styles.buttonArrow} ${className} ${styles[theme]}`}>
      <img className={`${styles.buttonArrow__icon} ${styles[direction]} ${styles[size]}`} src={theme==='dark' ? iconArrowLight : iconArrowDark} alt="iconArrow" />
    </div>
  )
}

export default ButtonArrow