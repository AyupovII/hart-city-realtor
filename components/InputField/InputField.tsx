
import style from './InputField.module.scss'
import EyeCloseIcon from '../../assets/svg/eye-close.svg'
import EyeOpenIcon from '../../assets/svg/eye-open.svg'
import { useState } from 'react'

interface InputFieldProps {
    placeholder: string
    type: "text" | "email" | "password" | "tel"
    className?: string
    isError?: boolean
    [key: string]: any
}

const InputField: React.FC<InputFieldProps> = ({ className, type, placeholder, isError = false, ...props }) => {
    const [hidePassword, setHidePassword] = useState(true);
    const isPassword = type === "password";
    const [valueInput, setValueInput] = useState(props.value);
    console.log(className)
    return (
        <div className={`${className} ${style.inputField} ${isError ? style.inputField__error : ''}`}>
            <input
                type={isPassword ? (hidePassword ? "password" : "text") : type}
                className={`${style.inputField__input} ${isPassword ? style.inputField__password : ''}`} placeholder={placeholder}
                {...props} />
            {isPassword && <img src={hidePassword ? EyeCloseIcon : EyeOpenIcon} onClick={() => setHidePassword(!hidePassword)} className={style.inputField__icon} />}
        </div>
    )
}

export default InputField