import { Status } from '../../assets/types/enum'
import SearchInput from '../SearchInput/SearchInput'
import Select from '../Select/Select'
import style from './RequestsFilter.module.scss'
const RequestsFilter: React.FC = () => {
    const option1 = [
        {
            text: 'Уникальный1',
            value: 'OptionValue1'
        },
        {
            text: 'Уникальный2',
            value: 'OptionValue2'
        },
        {
            text: 'Уникальный3',
            value: 'OptionValue3'
        },
    ]
    const option2 = [
        {
            text: Status.IMPLEMENTED,
            value: 'OptionValue1'
        },
        {
            text: Status.FIXATION_HAS_EXPIRED,
            value: 'OptionValue2'
        },
        {
            text: Status.REJECTED,
            value: 'OptionValue3'
        },
        {
            text: Status.NOT_IMPLEMENTED,
            value: 'OptionValue4'
        },
    ]
    return (
        <div className={style.requestsFilter}>
            <div className={style.requestsFilter__content}>
                <Select label='Тип клиента' options={option1} />
                <Select label='Статус заявки' options={option2} />
            </div>
            <SearchInput />
        </div>
    )
}
export default RequestsFilter