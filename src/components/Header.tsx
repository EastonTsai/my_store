import dummy from "dummy/dummy"
import "styles/header.scss"
import { ReactComponent as Menu_icon } from 'files/icon/🦆 icon _menu_.svg'
import { ReactComponent as Logo_icon } from 'files/icon/SHOP_logo.svg'
import { ReactComponent as User_icon } from 'files/icon/🦆 icon _User Circle_.svg'
import { ReactComponent as Shopping_cart_icon } from 'files/icon/🦆 icon _shopping-cart_.svg'
import { ReactComponent as Search_icon } from 'files/icon/🦆 icon _search_.svg'
import ListCard from "./ListCard"
import { Link } from "react-router-dom"
import { useState } from "react"

const navbarList = dummy.categoryList
interface navItems {
  title: string,
  items: string[]
}


const Header = () => {
  const [navItem, setNavItem] = useState<navItems[]>([])

  const handleSearch = () => { }
  return (
    <header className="header">
      <div className="header_container container">
        <div className="header_logo">
          <Link to='/'><Logo_icon /></Link>
        </div>
        <div className="header_menu">
          <label htmlFor="search-checkbox">
            <Search_icon />
            <p>搜尋</p>
          </label>
          <div className="header_menu_shopping-car" >
            <Link to='/cart'>
              <Shopping_cart_icon />
              <p>購物車</p>
            </Link>
          </div>
          <div className="header_menu_login" >
            <Link to='/login'>
              <User_icon />
              <p>登入</p>
            </Link>
          </div>
          <label htmlFor="navbar-checkbox">
            <Menu_icon />
            <p>商品</p>
          </label>
          <input type="checkbox" id="search-checkbox" />
          <input type="checkbox" id="navbar-checkbox" />
          <div className="header_menu_search-wrap">
            <div className="search-input">
              <input
                type="text"
                placeholder="請輸入關鍵字"
              />
              <button onClick={handleSearch}>搜尋</button>
            </div>
          </div>

          <div className="header_menu_navbar">
            <label htmlFor="navbar-checkbox">X</label>

            <div className="navbar_wrap">
              {navbarList.map(nb =>
                <ListCard
                  key={nb.title}
                  className="navbar-category"
                  title={nb.title}
                  items={nb.products}
                />)}
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}
export default Header