import React from 'react'
import { connect } from 'react-redux'
import { storeApiUrl } from 'core/actions'
import { Redirect } from 'react-router-dom'
import { setCalcDate } from 'calc-result/actions'
import moment from 'moment'


const mapDispatchToProps =  ({
  storeApiUrl,
})


class AppEntry extends React.Component {

  constructor(props) {
    super(props)
    const { params:{ url,date },storeApiUrl } = props
    storeSparkApiTarget(atob(url))
  }

  render() {
    return (
      <Redirect to={{
        pathname: '/mock-route'
      }}/>
    )
    
  }
}


export default connect(null,mapDispatchToProps)(AppEntry)
