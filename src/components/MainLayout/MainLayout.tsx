import Menu from '../Menu/Menu'
import style from './MainLayout.module.scss'
interface MainLayoutProps {
    children?: React.ReactNode
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className={style.mainLayout}>
            <Menu />
            <div className={style.content}>{children}</div>
        </div>
    )
}

export default MainLayout