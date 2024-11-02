import Button from '../Button/Button'
import ObjectsList from '../ObjectsList/ObjectsList'
import style from './Objects.module.scss'
import objectsList from '../../mock/objects.json'
const Objects: React.FC = () => {
    // const objectsList = [
    //     {
    //         id: 1,
    //         title: 'Новостойкино',
    //         text1: "Мануфактурная улица",
    //         street1: "Ленинская",
    //         street2: "Страж революции",
    //         price: 8500000,
    //         link: "#",
    //         img: 'https://picsum.photos/200/300'
    //     },
    //     {
    //         id: 2,
    //         title: 'Новостойкино',
    //         text1: "Мануфактурная улица",
    //         street1: "Ленинская",
    //         street2: "Страж революции",
    //         price: 8500000,
    //         link: "#",
    //         img: 'https://picsum.photos/200/300'
    //     },

    // ]
    return (
        <section>
            <div className={style.objects}>
                <h2 className={style.objects__title}>Объекты</h2>
                <div className={style.objects__container}>
                    <ObjectsList objectsList={objectsList.slice(0, 2)} />
                    <Button theme="blue" type="button" size="long" className={style.objects__button}>Показать все объекты</Button>
                </div>
            </div>
        </section>
    )
}

export default Objects