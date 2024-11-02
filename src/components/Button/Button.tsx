import style from './Button.module.scss'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: "button" | "submit" | "reset"
    theme: "white" | "blue" | "blur" | "gray" | "blur10" | "grayLight"
    size: "large" | "medium" | "long" | "middle"
    fullWidth?: boolean
    className?: string
    children?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ size, theme, type="button", fullWidth, children, ...props }) => {
    return (
        <button
            {...props}
            type={type}
            data-theme={theme}
            className={
                `${props.className} ${style.button} ${style[`button_${size}` as keyof typeof style]} ${fullWidth ? style.button_fullWidth : ''}`
            }
        >
            <span className={style.children}>{children}</span>
        </button>
    )
}
export default Button