
import style from './Request.module.scss'
// @ts-ignore
import StatusPointIcon from '../../assets/svg/status-point.svg?react'
import { StatusColor } from '../../assets/types/enum'
export interface IRequestProps {
    id: number,
    title: string,
    description: string,
    fio: string,
}
const Request: React.FC<IRequestProps> = ({ title, description, fio }) => {
    return (
        <div className={style.request}>
            <div className={style.request__status}>
                <div className={style['request__status-type']}>
                    <div className={style['request__status-icon']} style={{ color: StatusColor.FIXATION_HAS_EXPIRED }}>
                        <StatusPointIcon />
                    </div>
                    <p className={style['request__status-text']}>Не реализована</p>
                </div>
                <p className={style['request__status-date']}>
                    Осталось дней: {"14"}
                </p>
            </div>
            <div className={style.request__content}>
                <div className={style.request__info}>
                    <p className={style.request__name}>
                        {title}
                    </p>
                    <p className={style.request__description}>
                        {description}
                    </p>
                </div>
                <div className={style.request__fio}>

                    <p className={style['request__fio-value']}>
                        {fio}
                    </p>
                    <p className={style['request__fio-text']}>
                        Фамилия Имя Отчество
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Request