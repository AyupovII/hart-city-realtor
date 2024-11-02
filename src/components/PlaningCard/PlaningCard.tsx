import { PlansType } from '../Plans/Plans'
import style from './PlaningCard.module.scss'
import objectImg from '../../assets/img/object.png'

const PlaningCard: React.FC<PlansType & { isTableType?: boolean, onClick?: () => void }> = ({ id, title, columnRoom, area, floor, price, isTableType = true, onClick }) => {
  return (
    <div className={style["planingCard-wrapper"]} onClick={onClick}>
      {isTableType ?
        <div className={`${style.planingCard}`}>
          <div className={style.planingCard__content}>
            <p className={style.planingCard__title}>{title}</p>
            <img className={style.planingCard__image} src={objectImg} alt="objectImg" />
            <div className={style.planingCard__common}>
              <p className={style.planingCard__chip}>Улучшенная отделка</p>
              <div className={style.planingCard__info}>
                <p className={style.planingCard__columnRoom}>{columnRoom}-комн.</p>
                <span></span>
                <p className={style.planingCard__area}>{area} м2</p>
                <span></span>
                <p className={style.planingCard__floor}>{floor}/9</p>
              </div>
            </div>
          </div>
          <div className={style.planingCard__prices}>
            <p className={style.planingCard__price}>от {price} ₽</p>
            <p className={style.planingCard__credit}>В ипотеку от 10 063 ₽/мес.</p>
          </div>
        </div>
        :
        <div className={`${style["planingCard-list"]}`}>
          <div className={style['planingCard-common']}>
            <img className={style.planingCard__image} src={objectImg} alt="objectImg" />
            <div className={style.planingCard__content}>
              <p className={style.planingCard__title}>{title}</p>
              <div className={style.planingCard__common}>
                <p className={style.planingCard__chip}>Улучшенная отделка</p>
                <div className={style.planingCard__info}>
                  <p className={style.planingCard__columnRoom}>{columnRoom}-комн.</p>
                  <span></span>
                  <p className={style.planingCard__area}>{area} м2</p>
                  <span></span>
                  <p className={style.planingCard__floor}>{floor}/9</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.planingCard__prices}>
            <p className={style.planingCard__price}>от {price} ₽</p>
            <p className={style.planingCard__credit}>В ипотеку от 10 063 ₽/мес.</p>
          </div>
        </div>}
    </div>

  )
}

export default PlaningCard
