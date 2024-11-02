import { useState } from 'react'
import style from './СhoiceApartments.module.scss'
interface IСhoiceApartmentsProps {
  label: string
}
const СhoiceApartments: React.FC<IСhoiceApartmentsProps> = ({ label }) => {
  type ChoiceApartmentsType = {
    id: number
    name: string
  }
  const arrayApartment = [{
    id: 1,
    name: 'Студия',
  },
  {
    id: 2,
    name: '1',
  },
  {
    id: 3,
    name: '2',
  },
  {
    id: 4,
    name: '3',
  },
  {
    id: 5,
    name: '4',
  }
  ] as ChoiceApartmentsType[]
  const [checkedApartment, setCheckedApartment] = useState<ChoiceApartmentsType[]>([])

  const onCheckedApartment = (apartment: ChoiceApartmentsType) => {
    if (checkedApartment.find((item) => item.id === apartment.id)) {

      setCheckedApartment((oldState) => oldState.filter((item) => item.id !== apartment.id))
    } else {
      setCheckedApartment([...checkedApartment, apartment])
    }
  }
  return (
    <div className={style.choiceApartments}>
      <label className={style.select__label}>{label}</label>
      <div className={style.choiceApartments__list}>
        {
          arrayApartment.map((apartment) => {
            return <div className={`${style.choiceApartments__item} ${checkedApartment.find((item) => item.id === apartment.id) ? style['choiceApartments__item--active'] : ''}`} key={apartment.id} onClick={() => onCheckedApartment(apartment)}>
              {apartment.name}
            </div>
          })
        }
      </div>
    </div>
  )
}
export default СhoiceApartments