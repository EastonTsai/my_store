import dummy from 'dummy/dummy';
import 'styles/cartPage.scss';
import Header from "components/Header"
import { useState, useEffect } from 'react';
import CheckBox from 'components/CheckBox';
import Quantity from 'components/Quantity';

const CartPage = () => {
  const [totalNumber, setTotalNumber] = useState(0)
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [cartList, setCartList] = useState(dummy.cartList)

  useEffect(() => {
    let num = 0
    cartList.forEach(item => {
      if (item.isChecked) {
        num += Number(item.quantity) * Number(item.price)
      }
    })
    setTotalNumber(num)
  }, [cartList, isAllChecked])
  const handleAllCheckButton = () => {
    if (isAllChecked) {
      cartList.map(item => item.isChecked = false)
    } else {
      cartList.map(item => item.isChecked = true)
    }
    setIsAllChecked(!isAllChecked)
  }
  const handleItemCheck = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number | string) => {
    const newList = cartList.map(item => {
      if (item.id === id) {
        item.isChecked = !item.isChecked
        return item
      }
      return item
    })
    setCartList(newList)
  }
  const handleQuantity = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number | string
  ) => {
    setCartList(prev => prev.map(item => {
      if (item.id === id) {
        item.quantity = Number(e.target.value)
        return item
      }
      return item
    }))
  }
  const handlePlusQuantity = (id: string | number) => {
    const newList = cartList.map(item => {
      if (item.id === id) {
        item.quantity += 1
        return item
      }
      return item
    })
    setCartList(newList)
  }
  const handleMinusQuantity = (id: string | number) => {
    const newList = cartList.map(item => {
      if (item.id === id) {
        item.quantity -= 1
        return item
      }
      return item
    })
    setCartList(newList)
  }
  return (
    <div className="cart-page">
      <div className="cart-page_container container">
        <Header />

        <div className="cart-page_main">
          <div className="main_header">
            <label className="header_all-check-button"
              onClick={handleAllCheckButton}
            >
              <CheckBox checked={isAllChecked} />
              <span>全選</span>
            </label>
            <div className="header_introduce">商品資訊</div>
            <div className="header_quantity">數量/單價</div>
          </div>
          <div className="main_list">
            {
              cartList.map(cl =>
                <div className='list_item' key={cl.id}>
                  <div onClick={(e) => handleItemCheck(e, cl.id)}
                  ><CheckBox checked={cl.isChecked} />
                  </div>
                  <div className="item_introduce">
                    <img src={cl.image} alt={cl.image} />
                    <p>{cl.introduce}</p>
                  </div>
                  <div className="item_quantity">
                    <Quantity
                      quantity={cl.quantity}
                      onChange={(e) => handleQuantity(e, cl.id)}
                      clickMinus={() => handleMinusQuantity(cl.id)}
                      clickPlus={() => handlePlusQuantity(cl.id)}
                    />
                    <div>${cl.price * cl.quantity}</div>
                  </div>
                </div>)
            }
          </div>
        </div>

        <div className="cart-page_footer container">
          <div
            className='footer_all-check-button'
            onClick={handleAllCheckButton}
          >
            <CheckBox checked={isAllChecked} />
            <span>全選</span>
          </div>
          <div className="footer_total">
            <span>總金額 : </span>
            <span className="total-number">${totalNumber}</span>
          </div>
          <div className="footer_submit">
            結帳
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartPage