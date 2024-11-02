import style from './ObjectCard.module.scss';
import saleHome from '../../assets/img/sale-home.png'
import Button from '../Button/Button';
// @ts-ignore
import StreetIcon from '../../assets/svg/street.svg?react'

export interface IObjectCardProps {
    id: number,
    title: string,
    text1: string,
    street1: string,
    street2: string,
    price: number,
    link: string,
    img: string
}
const ObjectCard: React.FC<IObjectCardProps> = ({ id, title, text1, street1, street2, price, link, img }) => {

    return (
        <div className={style.objectCard} style={{ backgroundImage: `url(${saleHome})` }}>
            <p className={style.objectCard__sale}>Отделка в подарок</p>
            <div className={style.objectCard__content}>
                <div className={style.objectCard__header}>
                    <h2 className={style.objectCard__title}>{title}</h2>
                    <div className={style['objectCard__common-info']}>
                        <p className={style.objectCard__text}>{text1}</p>
                        <div className={style.objectCard__address}>
                            <div className={style.streetX}>
                                <StreetIcon className={style.streetX__icon} />
                                <p className={style.streetX__text}>{street1}</p>
                            </div>
                            <div className={style.streetY}>
                                <StreetIcon className={style.streetY__icon} />
                                <p className={style.streetY__text}>{street2}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.objectCard__info}>
                    <p className={style.objectCard__price}>от {price} ₽</p>
                    <Button theme="blur" type="button" size="middle" className={style.objectCard__button}>Подробнее</Button>
                </div>
            </div>

        </div>
    )
}

export default ObjectCard