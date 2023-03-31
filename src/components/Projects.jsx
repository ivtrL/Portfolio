import React from 'react'
import styles from '../styles/ProjectsStyle.module.css'

const Projects = () => {
  return (
    <div className={styles.projects}>
        <div className={styles.projects_container}>
            <h1 className={styles.projects_h}>
                Meus Projetos:
            </h1>
            <p className={styles.projects_p}>
                A maioria dos meus projetos, se não todos,
                que trabalhei e ou estou trabalhando estão
                no repositório do meu github, incluindo este
                próprio site. Busco sempre criar aplicações 
                que são capazes de resolver problemas do 
                cotidiano e ou da área profissional.
            </p>
        </div>
    </div>
  )
}

export default Projects