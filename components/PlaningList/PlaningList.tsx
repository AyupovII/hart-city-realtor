import style from './PlaningList.module.scss'
// @ts-ignore
import ListTypeIcon from '../../assets/svg/list-type.svg?react'
// @ts-ignore
import TableTypeIcon from '../../assets/svg/table-type.svg?react'
import PlaningCard from '../PlaningCard/PlaningCard'
interface IPlaningListProps {
  setIsTableType: React.Dispatch<React.SetStateAction<boolean>>
  isTableType: boolean
  planingList: any
}
export type PlaningListType = {
  id: number
  title: string
  columnRoom: number
  area: number
  floor: number
  price: number
}
const PlaningList: React.FC<IPlaningListProps> = ({ setIsTableType, isTableType, planingList }) => {
  return (
    <div className={style.planingList}>
      <div className={style.planingList__type}>
        <p className={style.planingList__title}>
          Доступные планировки (1345)
        </p>
        <div className={style.planingList__icons}>
          <div className={`${style.planingList__icon} ${isTableType ? style['planingList__icon--active'] : ""}`} onClick={() => setIsTableType(true)}>
            <TableTypeIcon className={style.planingList__tableTypeIcon} />
          </div>
          <div className={`${style.planingList__icon} ${!isTableType ? style['planingList__icon--active'] : ""}`} onClick={() => setIsTableType(false)}>
            <ListTypeIcon className={style.planingList__listTypeIcon} />
          </div>
        </div>
      </div>
      <div className={`${style.planingList__content} ${!isTableType ? style['planingList__content--list'] : ""}`} >
        {
          planingList.map((item: PlaningListType) =>
            <PlaningCard
              key={item.id}
              id={item.id}
              title={item.title}
              columnRoom={item.columnRoom}
              area={item.area}
              floor={item.floor}
              price={item.price}
              isTableType={isTableType}
            />)
        }
      </div>
    </div>
  )
}

export default PlaningList