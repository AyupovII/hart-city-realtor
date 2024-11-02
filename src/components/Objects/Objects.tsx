import Button from '../Button/Button'
import ObjectsList from '../ObjectsList/ObjectsList'
import style from './Objects.module.scss'
import objectsList from '../../mock/objects.json'
const Objects: React.FC = () => {

    return (
        <section>
            <h2>Объекты</h2>
            <div className={style.objects}>
                <div className={style.objects__container}>
                    <ObjectsList objectsList={objectsList.slice(0, 2)} />
                    <Button theme="blue" size="long" className={style.objects__button}>Показать все объекты</Button>
                </div>
            </div>
        </section>
    )
}

export default Objects