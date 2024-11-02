import ObjectsList from '../ObjectsList/ObjectsList'
import style from './AllObjectsList.module.scss'
import objectsList from '../../mock/objects.json'
import Button from '../Button/Button'
import Pagination from '../Pagination/Pagination'
const AllObjectsList: React.FC = () => {
    return (
        <div className={style.allObjectsList}>
            <h2 className={style.allObjectsList__title}>Объекты</h2>
            <ObjectsList objectsList={objectsList} />
            <div className={style.allObjectsList__control}>
                <p>1-10 из 90 элементов</p>
                <Button theme="blue" type="button" size="large">Показать еще</Button>
                <Pagination / >
            </div>
        </div>
    )
}

export default AllObjectsList