import style from './Plans.module.scss'
// @ts-ignore
import ListTypeIcon from '../../assets/svg/list-type.svg?react'
// @ts-ignore
import TableTypeIcon from '../../assets/svg/table-type.svg?react'
import PlaningCard from '../PlaningCard/PlaningCard'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import DetailedApartment from '../DetailedApartment/DetailedApartment'
import PlaningList from '../PlaningList/PlaningList'
import planingList from '../../mock/plannings.json'

interface IPlansProps {
  setIsTableType: React.Dispatch<React.SetStateAction<boolean>>
  isTableType: boolean
  planingList?: PlansType[]
  
}
export type PlansType = {
  id: number
  title: string
  columnRoom: number
  area: number
  floor: number
  price: number
  
}
const Plans: React.FC<IPlansProps> = ({ setIsTableType, isTableType }) => {
  const [isModalActive, setModalActive] = useState(false);
  const [selectApartmentId, setSelectApartmentId] = useState<number | null>(null);
  console.log(selectApartmentId);
  const handleModalOpen = (id: number) => {
    setSelectApartmentId(id);
    setModalActive(true);
  };
  const handleModalClose = () => {
    setSelectApartmentId(null);
    setModalActive(false);
  };
  return (
    <>
      <div className={style.plans}>
        <div className={style.plans__type}>
          <p className={style.plans__title}>
            Доступные планировки (1345)
          </p>
          <div className={style.plans__icons}>
            <div className={`${style.plans__icon} ${isTableType ? style['plans__icon--active'] : ""}`} onClick={() => setIsTableType(true)}>
              <TableTypeIcon className={style.plans__tableTypeIcon} />
            </div>
            <div className={`${style.plans__icon} ${!isTableType ? style['plans__icon--active'] : ""}`} onClick={() => setIsTableType(false)}>
              <ListTypeIcon className={style.plans__listTypeIcon} />
            </div>
          </div>
        </div>
        <PlaningList isTableType={isTableType} onClick={handleModalOpen} planingList={planingList} />
      </div>
      {isModalActive && (
        <Modal onClose={handleModalClose}>
          <DetailedApartment onClick={handleModalOpen} />
        </Modal>
      )}
    </>
  )
}

export default Plans