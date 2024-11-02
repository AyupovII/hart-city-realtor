import style from './MenuList.module.scss'
// @ts-ignore
import HomeIcon from '../../assets/svg/menu-home-icon.svg?react'
// @ts-ignore
import ObjectIcon from '../../assets/svg/menu-object-icon.svg?react'
// @ts-ignore
import ClientsIcon from '../../assets/svg/menu-clients-icon.svg?react'
// @ts-ignore
import RequestIcon from '../../assets/svg/menu-request-icon.svg?react'
// @ts-ignore
import NotificationIcon from '../../assets/svg/menu-notification-icon.svg?react'
// @ts-ignore
import LogoutIcon from '../../assets/svg/logout.svg?react'
// @ts-ignore
import ContactsIcon from '../../assets/svg/menu-contacts-icon.svg?react'
import React from 'react'
// @ts-ignore

interface IMenuListProps {
    menuOpen: boolean
}
const MenuList: React.FC<IMenuListProps> = ({ menuOpen }) => {
    const menuList = [
        {
            name: 'Главная',
            icon: <HomeIcon />
        },
        {
            name: 'Объекты',
            icon: <ObjectIcon />
        },
        {
            name: 'Клиенты',
            icon: <ClientsIcon />
        },
        {
            name: 'Заявки',
            icon: <RequestIcon />
        },
        {
            name: 'Новости и акции',
            icon: <NotificationIcon />
        },
        {
            name: 'Контакты',
            icon: <ContactsIcon />
        }
    ]

    return (
        <div className={`${style.menuList__container} ${menuOpen ? style['menuList__container--open'] : ''}`}>
            <div className={`${style.menuList} ${menuOpen ? style['menuList--open'] : ''}`}>
                {menuList.map((item, index) => (
                    <div key={index} className={`${style.menuList__item} ${index === 0 ? style['menuList__item-active'] : ''}`}>
                        <div className={style['menuList__item-icon']}>{item.icon}</div>
                        <p className={style["menuList__item-name"]}>{item.name}</p>
                    </div>
                ))}
            </div>
            <div className={style.menu__logout}>
                <LogoutIcon className={style['menu__logout-icon']} />
                <p className={style['menu__logout-text']}>Выйти</p>
            </div>
        </div>
    )
}

export default MenuList