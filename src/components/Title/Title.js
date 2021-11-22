import './Title.css';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
      <div className="Title-Container">
        <img className="Logo" src={logo} alt="" />
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle"> San Franciscos Privately Owned Public Spaces</div>
      </div>

      <div className="NavBar">
        <NavLink
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/">List</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/about">About</NavLink>
      </div>
    </div>
  )
}

export default Title
