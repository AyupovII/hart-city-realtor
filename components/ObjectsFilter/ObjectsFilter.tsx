import style from './ObjectsFilter.module.scss'
import Slider from '../Slider/Slider'
import Select from '../Select/Select'
import СhoiceApartments from '../СhoiceApartments/СhoiceApartments'
import ClearFilter from '../ClearFilter/ClearFilter'
import Button from '../Button/Button'
const ObjectsFilter: React.FC = () => {
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
    <div className={style.objectsFilter}>
      <Select options={options1} label='Выберите тип недвижимости' defaultValue={{ text: 'Коммерческая', value: 'OptionValue1' }} className={style.objectsFilter__select} />
      <Select options={options2} label='Выберите этаж' defaultValue={{ text: '1', value: '1' }} />
      <СhoiceApartments label='Укажите количество комнат' />
      <Slider min={25.5} max={80} minDistance={3} unitOfMeasure={'м2'} label='Площадь' />
      <Slider min={3500000} max={7500000} minDistance={400000} unitOfMeasure={'₽'} label='Укажите стоимость' className={style.objectsFilter__slider} />
      <div className={style.objectsFilter__control}>
        <ClearFilter className={style.objectsFilter__clear} />
        <Button theme='blue' size='large' type='button'>Показать 105 квартир</Button>
      </div>
    </div>
  )
}

export default ObjectsFilter