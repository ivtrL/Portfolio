import React, { useEffect, useState } from 'react'
import styles from '@/styles/NavStyle.module.css'
import { BiHomeAlt2, BiUser, BiNotepad, BiGridAlt } from "react-icons/bi"

const Navbar = () => {
const [navLink, setNavLink] = useState(true)
const [navPosition, setNavPosition] = useState(false)
const [activeLink, setActiveLink] = useState({link1: false, link2: false, link3: false, link4: false})

useEffect(() => {
    setTimeout(() => {
        setNavLink(false)
      }, 2200)    
}, [])

useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.matchMedia('(min-width: 767px)').matches) {
            if (window.scrollY > 90) {
                setNavPosition(true)
            }
            else {
                setNavPosition(false)
            }
        }
    })
}, [])

return (
    <div className={`${navPosition && styles.nav_bottom} ${!navPosition && styles.navegação}`}>
        <div className={styles.logo}>
        <span className={`${styles.logo_nome} ${navPosition && styles.nav_nome_off}`}>Isaac Vitorino</span>
        </div>
    
        <nav className={styles.nav_items}>
            <a href="#home" className={`${styles.nav_link} ${navLink && styles.nav_link_off} ${activeLink.link1 && styles.active_link}`} onClick={() => {setActiveLink({link1: true, link2: false, link3: false, link4: false})}}>
                <i><BiHomeAlt2/></i>
                <span className={`${!navPosition && styles.nav_nome} ${navPosition && styles.nav_nome_off}`}> Início</span>
            </a>
            <a href="#profile" className={`${styles.nav_link} ${navLink && styles.nav_link_off} ${activeLink.link2 && styles.active_link}`} onClick={() => {setActiveLink({link1: false, link2: true, link3: false, link4: false})}}>
                <i><BiUser/></i>
                <span className={`${!navPosition && styles.nav_nome} ${navPosition && styles.nav_nome_off}`}> Meu Perfil</span>
            </a>

            <a href="#projects" className={`${styles.nav_link} ${navLink && styles.nav_link_off} ${activeLink.link3 && styles.active_link}`} onClick={() => {setActiveLink({link1: false, link2: false, link3: true, link4: false})}}>
                <i><BiNotepad/></i>
                <span className={`${!navPosition && styles.nav_nome} ${navPosition && styles.nav_nome_off}`}> Projetos</span>
            </a>

            <a href="#skills" className={`${styles.nav_link} ${navLink && styles.nav_link_off} ${activeLink.link4 && styles.active_link}`} onClick={() => {setActiveLink({link1: false, link2: false, link3: false, link4: true})}}>
                <i><BiGridAlt/></i>
                <span className={`${!navPosition && styles.nav_nome} ${navPosition && styles.nav_nome_off}`}> Habilidades</span>
            </a>
        </nav> 
    </div>
    )
}

export default Navbar