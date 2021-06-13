import React from 'react'
import style from './Header.module.css'



const Header = () => {

    return (
        <header className={style.header}>
            <img className={style.logo}
                src="https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/c1/ae/3d/c1ae3d6d-8629-acd0-6ec6-8fd4e4a1b9b8/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"/>
            <h1 className={style.tagline}>SOCIAL NETWORK</h1>
        </header>
    )
}
export default Header