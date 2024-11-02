import style from './Menu.module.scss'
import menuControlIcon from '../../assets/svg/menu-controll.svg'
import menuNameIcon from '../../assets/svg/menu-name.svg'
import menuIcon from '../../assets/svg/menu-icon.svg'
import profileImage from '../../assets/img/profile.png'
import { useContext, useEffect, useState } from 'react'
import MenuList from '../MenuList/MenuList'

// @ts-ignore
import MobileMenuIcon from '../../assets/svg/mobile-menu-icon.svg?react'
// @ts-ignore
import CloseMenuIcon from '../../assets/svg/close-menu.svg?react'
import { Context } from '../../App'

const Menu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const { setHiddenScroll } = useContext(Context)
    const openMenu = () => {
        setMenuOpen(!menuOpen)
        setHiddenScroll(!menuOpen)
    }
    const closeMenu = () => {
        setMenuOpen(false)
        setHiddenScroll(false)
    }
    useEffect(() => {
        /////закрываем меню и включаем скролл при переключении на разрешения декстопа
        const handleResize = () => {
            if (window.innerWidth >= 1020) {
                closeMenu()
                console.log('close menu')
            };
        }
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className={`${style.menu} ${menuOpen ? style['menu--open'] : ''}`}>
                <div className={style.menu__header}>
                    <div className={style['menu__main-logo']}>
                        <img className={style['menu__menu-icon']} src={menuIcon} alt="menuIcon" />
                        <img className={style['menu__menu-name-icon']} src={menuNameIcon} alt="menuNameIcon" />
                    </div>
                    <img
                        className={style['menu__menu-control-icon']}
                        src={menuControlIcon}
                        alt="menuControlIcon"
                        onClick={() => setMenuOpen(!menuOpen)} />
                </div>
                <div className={style.menu__container}>
                    <div className={style.menu__profile}>
                        <img className={style['menu__profile-photo']} src={profileImage} />
                        <div className={style['menu__profile-info']}>
                            <p className={style['menu__profile-name-text']}>Мария Васильевна</p>
                            <p className={style['menu__profile-name-company']}>Название агенства</p>
                        </div>
                    </div>
                    <MenuList menuOpen={menuOpen} />
                </div>
            </div>
            <div className={`${style.menu_mobile} ${menuOpen ? style['menu_mobile--open'] : ''}`}>
                <div className={style['menu_mobile__header']}>
                    <div className={style.menu_mobile__profile}>
                        <img className={style['menu_mobile__profile-photo']} src={profileImage} />
                        <div className={style['menu_mobile__profile-info']}>
                            <p className={style['menu_mobile__profile-name-text']}>Мария Васильевна</p>
                            <p className={style['menu_mobile__profile-name-company']}>Название агенства</p>
                        </div>
                    </div>
                    <div className={style['menu_mobile__menu-icon']} onClick={openMenu}>
                        {menuOpen ? <CloseMenuIcon /> : <MobileMenuIcon />}
                    </div>
                </div>
                <div className={`${style.menu_mobile__container} ${menuOpen ? style['menu_mobile__container--open'] : ''}`}>
                    <div className={style.menu_mobile__content}>
                        <MenuList menuOpen={menuOpen} isMobile={true} closeMenu={closeMenu} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu