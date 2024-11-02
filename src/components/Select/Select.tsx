import React, { useEffect, useState } from 'react';
import style from './Select.module.scss';
import InputField from '../InputField/InputField';
interface ISelectProps {
  label?: string;
  options: {
    text: string;
    value: string;
  }[]
  placeholder?: string;
  defaultValue?: { text: string; value: string }
  className?: string

}
const Select: React.FC<ISelectProps> = ({
  label,
  options = [{
    text: 'OptionText',
    value: 'OptionValue'
  }],
  placeholder = 'Placeholder',
  defaultValue = null,
  className = ''
}) => {

  const [value, setValue] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (!(event.target as Element).closest('.select')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${style.select} ${className} select`}>
      <label className={style.select__label}>{label}</label>
      <InputField
        type="text"
        className={`${style.select__input} ${isOpen && style['select__input--open']}`}
        placeholder={placeholder}
        value={defaultValue?.text ?? value?.text}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={`${style.select__options} ${isOpen && style['select__options--active']}`}>
        <ul className={style.select__list}>
          {options.map((option) => (
            <li
              key={option.value}
              className={`${style.select__option} ${option.value === value?.value && style['select__option--active']} `}
              onClick={() => setValue(option)}
            >
              <span>{option.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )

};

export default Select;