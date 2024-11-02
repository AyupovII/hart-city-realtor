import style from './PlaningList.module.scss'
import PlaningCard from '../PlaningCard/PlaningCard'
import { PlansType } from '../Plans/Plans'


interface IPlaningListProps {
    isTableType?: boolean
    onClick: (id: number) => void
    planingList: PlansType[]
}
const PlaningList: React.FC<IPlaningListProps> = ({ isTableType = true, onClick, planingList }) => {
    return (
        <div className={`${style.planingList__content} ${!isTableType ? style['planingList__content--list'] : ""}`} >
            {
                planingList.map((item: PlansType) =>
                    <PlaningCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        columnRoom={item.columnRoom}
                        area={item.area}
                        floor={item.floor}
                        price={item.price}
                        isTableType={isTableType}
                        onClick={()=>onClick(item.id)}
                    />)
            }
        </div>
    )
}
export default PlaningList