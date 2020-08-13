import React, { Component } from 'react'
import PageLayout from '../../components/page-layout/index'

import Title from '../../components/title/index'
import Origamis from '../../components/origamis/index'

const Publication = () => {
        return ( 
        <PageLayout >
              <Title title="Publication" /> 
              <Origamis length={3}/>
          </PageLayout>
       )
}
export default Publication 
