import style from './CheckBox.module.scss'

interface ICheckBoxProps {
    label: string
    className?: string
}
const CheckBox: React.FC<ICheckBoxProps> = ({ label, className }) => {
    return (
        <label className={`${style.checkbox} ${className}`}>
            <input type="checkbox" />
            <span className={style.checkbox__label}>{label}</span>
            <span className={style.custom_checkbox}></span>
        </label>
    )
}

export default CheckBox