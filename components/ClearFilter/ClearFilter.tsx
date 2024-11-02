import style from './ClearFilter.module.scss'
// @ts-ignore
import ClearFilterIcon from '../../assets/svg/clear-filter.svg?react'
interface IClearFilterProps {
  className?: string
}
const ClearFilter: React.FC<IClearFilterProps> = ({className}) => {
  return (
    <div className={`${style.clearFilter} ${className}`}>
      <p className={style.clearFilter__text}>Очистить фильтр</p><ClearFilterIcon className={style.clearFilter__icon}/>
    </div>
  )
}
export default ClearFilter