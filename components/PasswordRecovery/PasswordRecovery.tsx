import InputField from "../InputField/InputField";
import style from './PasswordRecovery.module.scss'
import Button from "../Button/Button";

const PasswordRecovery: React.FC = () => {
    return (
        <div className={style.passwordRecovery}>
            <h2 className={style.passwordRecovery__title}>Забыли пароль</h2>
            <p className={style.passwordRecovery__description}>На этот адрес будет выслана ссылка для сброса пароля</p>
            <form>
                <div className={style.inputs__list}>
                    <InputField type="email" placeholder="E-mail" value="" isError={false} />
                </div>
                <Button theme="blue" type="submit" size="long" fullWidth className={style.passwordRecovery__button}>Отправить</Button>
                <p className={style.passwordRecovery__text}>Уже есть аккаунт? <a href="#" className={style.passwordRecovery__link}>Войти</a></p>
            </form>

        </div>
    )
}

export default PasswordRecovery