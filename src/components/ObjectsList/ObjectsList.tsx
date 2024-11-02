import ObjectCard, { IObjectCardProps } from '../ObjectCard/ObjectCard';
import style from './ObjectsList.module.scss'
interface IObjectsListProps {
    objectsList: IObjectCardProps[];
}
const ObjectsList: React.FC<IObjectsListProps> = ({ objectsList }) => {
    return (
        <div className={style.objectsList}>
            {
                objectsList.map((object) => {
                    return <ObjectCard key={object.id} {...object}/>
                })
            }
        </div>
    )
}

export default ObjectsList