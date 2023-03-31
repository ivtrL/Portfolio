import React, { useEffect, useState } from 'react'
import styles from '../styles/HomeStyle.module.css'
import Typed from 'react-typed'


const Header = () => {
const [pStart, setStart] = useState(false)

useEffect(() => {
  setTimeout(() => {setStart(true)}, 1500)
},[])

  return (
    <div className={`${styles.animate} ${styles.home}`}>
      <div className={styles.d_container}>
        <p className={styles.h_description}>
          {pStart && <Typed typeSpeed={80} strings=
          {["Aqui você tem informações sobre todos os projetos que eu trabalhei e as minhas habilidades."]}>
          </Typed>}
        </p>
      </div>
      <h1 className={styles.h_title}>BEM-VINDO AO<span className={styles.h_title_special}> PORTFÓLIO</span></h1>
    </div>
  )
}

export default Header