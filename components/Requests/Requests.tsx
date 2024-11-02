import Button from '../Button/Button'
import RequestsList from '../RequestsList/RequestsList'
import style from './Requests.module.scss'
const Requests: React.FC = () => {
    const requestsList = [
        {
            id: 1,
            title: 'Название ЖК 1',
            description: "3-комн. квартира, 84,52 м²",
            fio: "Бутурамбеков М.Т.",
        },
        {
            id: 2,
            title: 'Название ЖК 1',
            description: "3-комн. квартира, 84,52 м²",
            fio: "Бутурамбеков М.Т.",
        },
        {
            id: 3,
            title: 'Название ЖК 1',
            description: "3-комн. квартира, 84,52 м²",
            fio: "Бутурамбеков М.Т.",
        },

    ]
    return (
        <section>
            <div className={style.requests}>
                <h2 className={style.requests__title}>Мои заявки</h2>
                <div className={style.requests__container}>
                    <RequestsList requestsList={requestsList} />
                    <Button theme="blue" type="button" size="long" className={style.requests__button}>Показать все заявки</Button>
                </div>
            </div>
        </section >
    )
}

export default Requests