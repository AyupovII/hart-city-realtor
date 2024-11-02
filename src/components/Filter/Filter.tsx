import Button from '../Button/Button'
import ObjectsFilter from '../ObjectsFilter/ObjectsFilter'
import style from './Filter.module.scss'
import filterIcon from '../../assets/svg/filter.svg'
import arrowRightIcon from '../../assets/svg/arrow-right.svg'
import ClearFilter from '../ClearFilter/ClearFilter'
import { useContext, useEffect, useState } from 'react'
import ModalFilter from '../ModalFilter/ModalFilter'
import { Context } from '../../App'

const Filter: React.FC = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { setHiddenScroll } = useContext(Context)
    useEffect(() => {
            setHiddenScroll(isOpenModal)
    }, [isOpenModal])
    return (
        <>
            <div className={style.filter}>
                <div className={style.filter__desktop}>
                    <ObjectsFilter />
                </div>
                <div className={style.filter__tablet}>
                    <Button className={style.filter__btn} size='medium' theme='blue' type='button' onClick={() => setIsOpenModal(true)}>
                        <div className={style['filter__btn-content']}>
                            <div className={style['filter__btn-name']}><img src={filterIcon} alt="" /><p>Фильтры</p></div>
                            <img className={style['filter__btn-icon']} src={arrowRightIcon} alt="" />
                        </div>
                    </Button>
                    <ClearFilter />
                </div>
            </div>
            <ModalFilter isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                <ObjectsFilter />
            </ModalFilter>
        </>

    )
}

export default Filter