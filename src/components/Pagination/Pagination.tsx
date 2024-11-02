import { useEffect, useState } from 'react'
import style from './Pagination.module.scss'
import ButtonArrow from '../ButtonArrow/ButtonArrow'

interface IPaginationProps {
    currentPage?: number
    totalPage: number
    step?: number
    className?: string
    isMobile?: boolean

}
const Pagination: React.FC<IPaginationProps> = ({ currentPage = 6, totalPage = 12, step = 2, className = '', isMobile }) => {
    const [page, setPage] = useState(currentPage);
    const pages = Array.from({ length: totalPage }).map((_, index) => index + 1)
    console.log(pages.slice(page - step, page).includes(step));
    const [all, setAll] = useState<(string | number)[]>([]);
    console.log("isMobile", isMobile)
    useEffect(() => {
        const start = Math.max(1, page - step + 1);
        const end = Math.min(totalPage, page + step - 1);
        const left = Array.from({ length: page - start }, (_, i) => start + i);
        const right = Array.from({ length: end - page }, (_, i) => page + i + 1);
        if (end === totalPage - 1) {
            right.push(totalPage); // add the last page to the right array
        }

        const all: (string | number)[] = isMobile ? [page, ...right] : [...left, page, ...right];
        if (page === (step + 1)) {
            all.unshift(1);
        }
        else
            if ((page > step) && !isMobile) {
                all.unshift(1, '...');
            }
        if (page + step < totalPage) {
            all.push('...', totalPage);
        }
        console.log(right)
        if (((totalPage - page) <= step) && isMobile) {
            all.unshift(...Array.from({ length: (step - totalPage + page) }, (_, i) => page - i - 1).reverse());
        }
        setAll(all);
    }, [page, step, totalPage, isMobile]);
    return (

        <div className={`${style.pagination} ${className}`}>
            <ButtonArrow onClick={() => setPage(page - 1)} direction="left" size="small" theme={'light'} />
            {all.map((value, index) => (
                <button type="button" className={`${style.pagination__item} ${page === value ? style.pagination__item_active : ''}`} key={index} onClick={() => setPage(value)}>{value}</button>
            ))}
            <ButtonArrow onClick={() => setPage(page + 1)} direction="right" size="small" theme={'light'} />
        </div>
    )
}

export default Pagination