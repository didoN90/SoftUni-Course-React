import React,{ Component } from 'react'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import styles from './index.module.css'

class Form extends Component {
    constructor(props){
        super(props)

    }
    render () {
    return (
        <div>
            <PageLayout>
                <Title tilte="Controller Form"/>
                <form className={styles.constainer} >
                    <label>
                        <input />  
                    </label>
                </form>
            </PageLayout>
        </div>
    )
}
}

export default Form