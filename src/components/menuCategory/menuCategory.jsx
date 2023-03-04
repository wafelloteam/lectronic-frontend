import React from 'react'
import style from './menuCategory.module.css'

function Menus() {
    return (
        <div className={style.btn_gr}>
            <a href="/#" className={style.label_cat} id={style.active}>
                Headphone
            </a>
            <a href="/#" className={style.label_cat}>
                Air Conditioner
            </a>
            <a href="/#" className={style.label_cat}>
                Router
            </a>
        </div>
    )
}

export default Menus
