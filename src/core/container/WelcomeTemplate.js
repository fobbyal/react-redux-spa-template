import React from 'react'

const WelcomeTemplate = () => (
  <div className="ui huge message page grid">
    <h1 className="ui huge header">Hello, Welcome!!!</h1>
    <p>This is a template for an Exampe Ruote with the react-router-dom
      also known as react-router v4. This Route features a Side Bar to
      the left as well as a active Link indicator on the NAV bar.
        Plase explore the following files for details</p> 
    <div style={{ width:'100%' }}>
      <ul>
         <li> /src/core/container/ExampleView.js </li>
         <li> /src/core/container/Container.js</li>
      </ul>
    </div>
  </div>
)

export default WelcomeTemplate

