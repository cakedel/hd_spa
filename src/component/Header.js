import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Main</NavLink>
        </li>
        <li>
          <NavLink to="/sub01">Sub01</NavLink>
        </li>
        <li>
          <NavLink to="/sub02">Sub02</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header;