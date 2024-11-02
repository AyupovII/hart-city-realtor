import Button from '../Button/Button'
import style from './CheckingClient.module.scss'
const CheckingClient: React.FC = () => {
    return (
        <section>
            <div className={style.checkingClient}>
                <h2 className={style.checkingClient__title}>Проверка уникальности клиента</h2 >
                <Button theme="blur10" type="button" size="large" className={style.checkingClient__button}>Оставить заявку</Button>
            </div>
        </section>
    )
}
export default CheckingClient