import PlaningList from '../PlaningList/PlaningList'
import style from './DetailedApartment.module.scss'
import planingList from '../../mock/plannings.json'
import ApartmentSliders from '../ApartmentSliders/ApartmentSliders'
import DescriptionApartment from '../DescriptionApartment/DescriptionApartment'

interface IDetailedApartmentProps {
    onClick: (id: number) => void
}
const DetailedApartment: React.FC<IDetailedApartmentProps> = ({ onClick }) => {
    const copyArray = [...planingList]
    const test = copyArray.splice(0, 3)
    // console.log(test)
    return (
        <div className={style.detailedApartment}>
            <section>
                <h1>ЖК Новостойкино</h1>
                <div className={style.detailedApartment__wrapper}>
                    <ApartmentSliders />
                    <DescriptionApartment />
                </div>
            </section>
            <section>
                <h2>Похожие решения</h2>
                <div>
                    <PlaningList key={"test"} onClick={onClick} planingList={test} />
                </div>
            </section>
        </div>
    )
}

export default DetailedApartment