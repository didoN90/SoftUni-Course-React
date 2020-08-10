import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Footer = () => {
    const links = getNavigation()
    return (
        <div className={styles.footer}>
            <div>
                {
                    links.map(navElement => {
                         return (
                            <Link 
                             key={navElement.title}
                             href={navElement.link}
                             title={navElement.title}
                             type="footer"
                            />
                         )
                    })
                }
            </div>
                
            <p className={styles.universety}>
                SoftUni-Universety 2019
            </p>
        </div>
    )
}

export default Footer