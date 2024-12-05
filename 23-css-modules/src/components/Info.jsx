import React from 'react'
import './Info.css'
import styles from './Info.module.css'


export default function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from Info component</h1>
            <button className='my-button'>Click in the info component</button>
            <button className={styles.myOtherButton}>Click in the info component</button>
        </div>
    )
}

