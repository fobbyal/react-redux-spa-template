import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Menu } from 'semantic-ui-react'

const LinkRenderer = ({ match, to, className, children }) => (
    <Link
      to={to}
      className={className}
    > 
      {children}
    </Link>
  )

//const navs = [<Menu.Item name='Mock Route' to="/default" as={LinkRenderer}/>]

/** we can either choose to export an array of Menu.Items or an Component of Menu item here **/
export default navs
