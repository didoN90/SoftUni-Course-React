import React from 'react'
import PageLayout from '../../components/page-layout'
import styles from './index.module.css'
import Title from '../../components/title/index'
import Origamis from '../../components/Origamis/index'
import SubmitButton from '../../components/button/submit-button'

const ShareTougth = () => {
    return (
        <PageLayout>
            <Title title='Share your tougths'/>
            <div className={styles.container}>
                <textarea className={styles.textarea}> Publication... </textarea>
            </div>
            <div>
                <SubmitButton title="Submit"></SubmitButton>
            </div>
            <Origamis length={3} />
        </PageLayout>
    )
}

export default ShareTougth