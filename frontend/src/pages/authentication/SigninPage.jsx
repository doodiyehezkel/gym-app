import { Outlet, NavLink } from "react-router-dom"

import style from './SigninPage.module.css'

export default function SigninPage() {

    return (
        <div className={style.container} >
            <div className={style.sub_container}>
                <div className={style.nav}>
                    <NavLink className={({ isActive }) => isActive ? `${style.nav_link} ${style.active}` : `${style.nav_link}`} to={'/signin/coach'} > Coach </NavLink>
                    <NavLink className={({ isActive }) => isActive ? `${style.nav_link} ${style.active}` : `${style.nav_link}`} to={'/signin/trainee'} > Trainee </NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    )
}