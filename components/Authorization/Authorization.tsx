import { useState } from "react";
import InputField from "../InputField/InputField";
import style from './Authorization.module.scss'
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
interface IAuthorizationProps {
    setIsForgotPassword: (value: boolean) => void
}
const Authorization: React.FC<IAuthorizationProps> = ({ setIsForgotPassword }) => {
const navigate = useNavigate()

    return (
        <div className={style.authorization}>
            <h2 className={style.authorization__title}>Авторизация</h2>
            <form>
                <div className={style.inputs__list}>
                    <InputField type="text" placeholder="Логин" value="" isError={false} />
                    <InputField type={"password"} placeholder="Пароль" value="" isError={false} />
                </div>
                <p className={style.forgot} onClick={() => setIsForgotPassword(true)}>
                    Забыли пароль?
                </p>
                <Button theme="blue" type="submit" size="long" fullWidth className={style.authorization__button}>Войти</Button>
                <p className={style.authorization__text}>Нет аккаунта? <span  className={style.authorization__link} onClick={() => navigate('/live-request-registration')}>Оставить заявку</span></p>
            </form>

        </div>
    )
}

export default Authorization