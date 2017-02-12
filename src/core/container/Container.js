import React from 'react'
import styled from 'styled-components'
import { Route } from 'react-router-dom'
import RouteExample from './RouteExample'
import WelcomeTemplate from './WelcomeTemplate'
import ActiveLink from '../component/ActiveLink.js'

const CoreConatiner = () => (
<div> 
  <Route exact path="/mock-route" component={RouteExample}/>
  <Route exact path="/" component={WelcomeTemplate}/>
  {/* more Ruotes can be added here */}
</div>
)
export default CoreConatiner 

export const navs = [
  (<ActiveLink exact path="/mock-route" name="Example Route"  />)
]
