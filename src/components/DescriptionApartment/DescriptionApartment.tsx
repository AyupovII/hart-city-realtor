import Accordion from '../Accordion/Accordion'
import Button from '../Button/Button'
import style from './DescriptionApartment.module.scss'
const DescriptionApartment: React.FC = () => {
    return (
        <div className={style.descriptionApartment}>
            <div className={style.descriptionApartment__header}>
                <div className={style.descriptionApartment__title}>
                    <p className={style.descriptionApartment__text}>3-комн. квартира, 84,52 м²</p>
                </div>
                <p className={style.descriptionApartment__date}>Срок сдачи III кв. 2025 г.</p>
                <p className={style.descriptionApartment__price}>15 355 214 ₽</p>
            </div>
            <div className={style.descriptionApartment__content}>
                <div className={style['descriptionApartment__credit-info']}>
                    <div className={style.descriptionApartment__credit}>
                        <p>В ипотеку —</p> <span>от 30 125 ₽</span>
                    </div>
                    <div className={style.descriptionApartment__credit}>
                        <p>Первоначальный взнос — </p> <span>от 1 500 000 ₽</span>
                    </div>
                </div>
                <div className={style.descriptionApartment__info}>
                    <p>2 комн.</p>
                    <p>41,78 м2</p>
                    <p>Без отделки</p>
                    <p>7 этаж из 15</p>
                </div>
                <Accordion title="Все характеристики" open>
                    <div className={style.descriptionApartment__character}>
                        <div className={style.descriptionApartment__characterContent}>
                            <p>Срок сдачи</p>
                            <p>III квартал 2025 г.</p>
                        </div>
                        <div className={style.descriptionApartment__characterContent}>
                            <p>Количество комнат</p>
                            <p>3 комнаты</p>
                        </div>
                        <div className={style.descriptionApartment__characterContent}>
                            <p>Площадь</p>
                            <p>84,52 м²</p>
                        </div>
                        <div className={style.descriptionApartment__characterContent}>
                            <p>Отделка</p>
                            <p>без отделки</p>
                        </div>
                        <div className={style.descriptionApartment__characterContent}>
                            <p>Этаж</p>
                            <p>7 / 15</p>
                        </div>
                    </div>
                </Accordion>
                <div className={style.descriptionApartment__buttons}>
                    <Button theme="blue" size="medium" fullWidth>Оставить заявку</Button>
                    <Button theme="grayLight" size="medium" fullWidth>Отправить PDF на почту</Button>
                </div>
            </div>
        </div>
    )
}
export default DescriptionApartment