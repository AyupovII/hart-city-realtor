import { Status } from '../../assets/types/enum'
import RequestsFilter from '../RequestsFilter/RequestsFilter'
import style from './MyRequests.module.scss'
import requestsList from '../../mock/requests.json'
interface IRequestList {
    id: number,
    fio: string,
    type:  string ,
    status: string,
    apartmentСomplex: string,
    apartment: string,
    manager: {
        id: 1,
        name: string,
        phone: string,
        email: string
    },
    daysLeft: 14
}
const statusMap = {
    [Status.IMPLEMENTED]: 'Реализована',
    [Status.NOT_IMPLEMENTED]: 'Не реализована',
    [Status.FIXATION_HAS_EXPIRED]: 'Фиксация истекла',
    [Status.REJECTED]: 'Отказ',
  };
const MyRequests: React.FC = () => {
    const columnNames = ['ФИО', 'Тип клиента', 'Статус заявки', 'ЖК', 'Квартира', 'Менеджер', 'Осталось дней']
    const columnNames1 =  Object.keys(requestsList[0]) //requestsList 
    console.log(columnNames1)
    const requestsDataList = requestsList as unknown as IRequestList[]
    return (
        <section>
            <h2 className={style.myRequests__title}>Мои заявки</h2>
            <div className={style.myRequests}>
                <RequestsFilter />
                <div className={style.myRequests__content}>
                    <table className='table'>
                        <thead className='table__head'>
                            <tr>
                                {
                                    columnNames.map((columnName, index) => <th key={index}>{columnName}</th>)
                                }
                            </tr>
                        </thead>
                        <tbody className='table__body'>
                        {requestsDataList.map((request, index) => (
                            <tr key={index}>
                                <td>{request.fio}</td>
                                <td>{request.type}</td>
                                <td>{request.status}</td>  
                                <td>{request.apartmentСomplex}</td>
                                <td>{request.apartment}</td>
                                <td>{request.manager.name}</td>
                                <td>{request.daysLeft}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <table className='table'>
                        <thead className='table__head'>
                            <tr>
                                {
                                    columnNames.map((columnName, index) => <th key={index}>{columnName}</th>)
                                }
                            </tr>
                        </thead>
                        <tbody className='table__body'>
                        {requestsDataList.map((request, index) => (
                            <tr key={index}>
                                <th>{columnNames[index]}</th>
                                {/* <td>{request[columnNames1[index]]}</td> */}
                                <td>{request.type}</td>
                                <td>{request.status}</td>  
                                <td>{request.apartmentСomplex}</td>
                                <td>{request.apartment}</td>
                                <td>{request.manager.name}</td>
                                <td>{request.daysLeft}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default MyRequests