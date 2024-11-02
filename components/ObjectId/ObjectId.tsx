import { useState } from 'react'
import ObjectsFilter from '../ObjectsFilter/ObjectsFilter'
import PlaningList from '../PlaningList/PlaningList'
import planingList from '../../mock/plannings.json'

import style from './ObjectId.module.scss'
const ObjectId: React.FC = () => {
    const [isTableType, setIsTableType] = useState(true)
    const options1 = [
        {
            text: 'Коммерческая',
            value: 'OptionValue1'
        },
        {
            text: 'Option',
            value: 'OptionValue2'
        },
        {
            text: 'Option',
            value: 'OptionValue3'
        },
        {
            text: 'Option',
            value: 'OptionValue4'
        },
    ]
    const options2 = [
        {
            text: '1',
            value: '1'
        },
        {
            text: '2',
            value: '2'
        },
        {
            text: '3',
            value: '3'
        },
        {
            text: '4',
            value: '4'
        },
    ]

    return (
        <section>
            <div className={style.objectsFilter}>
                <ObjectsFilter />
                <PlaningList isTableType={isTableType} setIsTableType={setIsTableType} planingList={planingList}/>
            </div>
        </section>
    )
}

export default ObjectId