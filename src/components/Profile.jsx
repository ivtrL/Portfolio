import React from 'react'
import styles from '../styles/ProfileStyle.module.css'
import { BiEnvelopeOpen } from "react-icons/bi"
import { BsInstagram, BsWhatsapp} from "react-icons/bs"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import xImg from "../img/x.jpg"

const Profile = () => {
  return (
    <div className={`${styles.animate} ${styles.profile}`}>
          <div className={styles.profile_container}>
            <img src={xImg} alt="Picture of the author"/>
            <span className={styles.profile_description}></span>
            <div className={styles.contacts}>
              <a href="#" className={styles.ctt_email}>
                <i><BiEnvelopeOpen/></i>
              </a>
              <a href="#" className={styles.ctt_instagram}>
                <i><BsInstagram/></i>
              </a>
              <a href="#" className={styles.ctt_facebook}>
                <i><FaFacebookF/></i>
              </a>
              <a href="#" className={styles.ctt_github}>
                <i><FiGithub/></i>
              </a>
              <a href="#" className={styles.ctt_whatsapp}>
                <i><BsWhatsapp/></i>
              </a>
              <a href="#" className={styles.ctt_linkedin}>
                <i><FaLinkedinIn/></i>
              </a>
            </div>
          </div>
        </div>
  )
}

export default Profile