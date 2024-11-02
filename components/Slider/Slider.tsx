import { Slider as MUISlider } from '@mui/material'
import style from './Slider.module.scss'
import { useState } from 'react';

interface ISliderProps {
  min: number
  max: number
  unitOfMeasure: string
  label: string
  className?: string
  minDistance: number
}
const Slider: React.FC<ISliderProps> = ({ min, max, unitOfMeasure, label, minDistance, className = "" }) => {
  const [value1, setValue1] = useState<number[]>([min, max]);
  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        setValue1([newValue[0], newValue[0] + minDistance]);
      } else {
        setValue1([newValue[1] - minDistance, newValue[1]]);
      }
    } else {
      setValue1(newValue as number[]);
    }
  };

  return (
    <div className={`${style.slider} ${className}`}>
      <label className={style.select__label}>{label}</label>
      <div className={style.slider__wrapper}>
        <div className={style.slider__inputs}>
          <div className={style["slider__input-wrapper"]}>
            <span>от</span>
            <input className={style["slider__inputs-first"]} type="text" placeholder="от" value={value1[0]} isError={false} onChange={(e) => handleChange2(e, [+e.target.value, value1[1]], 0)} />
          </div>
          <span className={style.slider__separator}></span>
          <div className={style["slider__input-wrapper"]}>
            <span>до</span>
            <input className={style["slider__inputs-second"]} type="text" placeholder="от" value={value1[1]} isError={false} onChange={(e) => handleChange2(e, [value1[0], +e.target.value,], 0)} />
            <span>{unitOfMeasure}</span>
          </div>
        </div>
        <MUISlider
          className={style.slider__mui}
          value={value1}
          onChange={handleChange2}
          min={min}
          max={max}
        />
      </div>
    </div >
  )
}

export default Slider