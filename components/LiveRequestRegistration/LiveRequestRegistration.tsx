import InputField from "../InputField/InputField";
import style from './LiveRequestRegistration.module.scss'
import Button from "../Button/Button";
import CheckBox from "../CheckBox/CheckBox";
import { useNavigate } from "react-router-dom";
interface ILiveRequestRegistrationProps {
}
const LiveRequestRegistration: React.FC<ILiveRequestRegistrationProps> = () => {
const navigate = useNavigate()

    return (
        <div className={style.liveRequestRegistration}>
            <h2 className={style.liveRequestRegistration__title}>
                Оставить заявку
                на регистрацию</h2>
            <p className={style.liveRequestRegistration__description}>Заполните заявку и наш менеджер свяжется с вами
                в ближайшее время</p>
            <form>
                <div className={style.inputs__list}>
                    <InputField type="text" placeholder="Ваше имя" value="" isError={false} />
                    <InputField type="text" placeholder="Название агенства" value="" isError={false} />
                    <InputField type="tel" placeholder="+7" value="" isError={false} />
                    <InputField type={"email"} placeholder="E-mail" value="" isError={false} />
                </div>
                <Button theme="blue" type="submit" size="long" fullWidth className={style.liveRequestRegistration__button}>Отправить</Button>
                <CheckBox className={style.liveRequestRegistration__checkbox} label="Я согласен с условиями обработки персональных данных и политикой концфиденциальности" />
                <p className={style.liveRequestRegistration__text}>Уже есть аккаунт? <span className={style.liveRequestRegistration__link} onClick={() => navigate('/auth')}>Войти</span></p>
            </form>

        </div>
    )
}

export default LiveRequestRegistration