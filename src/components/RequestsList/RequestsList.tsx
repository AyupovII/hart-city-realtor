import { IRequestProps } from '../Request/Request';
import style from './RequestsList.module.scss'
import Request from '../Request/Request';
interface IRequestsListProps {
    requestsList: IRequestProps[];
}
const RequestsList: React.FC<IRequestsListProps> = ({ requestsList }) => {
    return (
        <div className={style.requestsList}>
            {
                requestsList.map((request) => {
                    return <Request key={request.id} {...request}/>
                })
            }
        </div>
    )
}

export default RequestsList