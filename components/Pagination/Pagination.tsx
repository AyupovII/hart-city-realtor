import { useEffect, useState } from 'react'
import style from './Pagination.module.scss'
import Button from '../Button/Button'

interface IPaginationProps {
    currentPage?: number
    totalPage: number
    step?: number

}
const Pagination: React.FC<IPaginationProps> = ({ currentPage = 6, totalPage = 12, step = 2 }) => {
    const [page, setPage] = useState(currentPage);
    const pages = Array.from({ length: totalPage }).map((_, index) => index + 1)
    console.log(pages.slice(page - step, page).includes(step));
    const [all, setAll] = useState([]);
    useEffect(() => {
        const start = Math.max(1, page - step + 1);
        const end = Math.min(totalPage, page + step - 1);
        const left = Array.from({ length: page - start }, (_, i) => start + i);
        const right = Array.from({ length: end - page }, (_, i) => page + i + 1);

        if (end === totalPage - 1) {
            right.push(totalPage); // add the last page to the right array
        }

        const all = [...left, page, ...right];
        if (page === (step + 1)) {
            all.unshift(1);
        }
        else
            if (page > step) {
                all.unshift(1, '...');
            }
        if (page + step < totalPage) {
            all.push('...', totalPage);
        }

        console.log(all);
        setAll(all);
    }, [page, step, totalPage]);
    return (

        <div className={style.pagination}>
            <button className={style.pagination__item} onClick={() => setPage(page - 1)}>«</button>
            {all.map((value, index) => (
                <button type="button" className={`${style.pagination__item} ${page === value ? style.pagination__item_active : ''}`} key={index} onClick={() => setPage(value)}>{value}</button>
            ))}
            <button className={style.pagination__item} onClick={() => setPage(page + 1)}>»</button>

        </div>
    )
}

export default Pagination