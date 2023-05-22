import "../styles/header.scss"
import { useState } from "react"
import ListItem from "./ListItem"
import { ReactComponent as Menu_icon } from '../files/icon/🦆 icon _menu_.svg'
import { ReactComponent as Logo_icon } from '../files/icon/SHOP_logo.svg'

const dummy = {
  navItem: ['經營理念', '最新消息', '聯絡我們']
}

const Header = () => {
  const [navItem, setNavItem] = useState(dummy.navItem)
  return (
    <div className="header">
      <div className="header_container container">
        <div className="header_left">
          <div className="header_left_navbar">
            <input type="checkbox" id="header_left_navbar-checkbox" />
            <label className="header_left_navbar_icon" htmlFor="header_left_navbar-checkbox"><Menu_icon /></label>
            <div className="header_left_navbar_container">
              <div className="header_left_navbar_background" />
              <ul className="header_left_navbar_list">
                <label htmlFor="header_left_navbar-checkbox">X</label>
                {navItem.map(item =>
                  <ListItem title={item} onClick={() => { }} />)}
              </ul>
            </div>
          </div>
          <div className="header_left_logo">
            <Logo_icon />
          </div>
        </div>
        <div className="header_middle">
          <div className="header_middle_logo"></div>
          <div className="header_middle_navbar"></div>
        </div>
        <div className="header_right"></div>
      </div>
    </div>
  )
}
export default Header