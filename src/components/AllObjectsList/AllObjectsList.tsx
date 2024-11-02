import ObjectsList from '../ObjectsList/ObjectsList'
import style from './AllObjectsList.module.scss'
import objectsList from '../../mock/objects.json'
import Button from '../Button/Button'
import Pagination from '../Pagination/Pagination'
import { useEffect, useState } from 'react'
const AllObjectsList: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        /////закрываем меню и включаем скролл при переключении на разрешения декстопа
        const handleResize = () => {
            if (window.innerWidth <= 1020) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={style.allObjectsList}>
            <h2 className={style.allObjectsList__title}>Объекты</h2>
            <ObjectsList objectsList={objectsList} />
            <div className={style.allObjectsList__control}>
                <p className={style.allObjectsList__text}>1-10 из 90 элементов</p>
                <Button className={style.allObjectsList__button} theme="blue" size="long">Показать еще</Button>
                <Pagination className={style.allObjectsList__pagination} totalPage={10} isMobile={isMobile} />
            </div>
        </div>
    )
}

export default AllObjectsList