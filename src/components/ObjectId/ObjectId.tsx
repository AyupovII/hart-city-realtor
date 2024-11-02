import { useEffect, useState } from 'react'
import Plans from '../Plans/Plans'
import planingList from '../../mock/plannings.json'

import style from './ObjectId.module.scss'
import Filter from '../Filter/Filter'
const ObjectId: React.FC = () => {
    const [isTableType, setIsTableType] = useState(true)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1020) {
                setIsTableType(true);
            };
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section>
            <h2 className={style.objectId__title}>ЖК Новостойкино</h2>
            <div className={style.objectId}>
                <Filter />
                <Plans isTableType={isTableType} setIsTableType={setIsTableType} planingList={planingList} />
            </div>
        </section>
    )
}

export default ObjectId