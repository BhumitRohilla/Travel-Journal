import React from "react"
import styles from "./navbar.module.css"
import img from "./../Fill 213.svg"
export default function Navbar(){
    return(
        <div className={styles.main}>
            <img src={img} className={styles.img} alt="" />
            <span>my travel journal.</span>
        </div>
    )
}