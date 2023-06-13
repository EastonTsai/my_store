import 'styles/productIntroduce.scss'
import { useState } from 'react'
import Quantity from './Quantity'

type specification = {
  title: string,
  content: string,
}
type props = {
  images: string[],
  content: {
    feature: string[],
    text: string[],
    color: string[],
    transportation: string[],
    price: number,
    specification: specification[],
  }
}

const ProductIntroduce = (props: props) => {
  const { images, content } = props
  const [bigImage, setBigImage] = useState(0)
  const [listOne, setListOne] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [colorNumber, setColorNumber] = useState(0)
  const handleSmallImage = (index: number) => {
    if (index === listOne && index > 0) {
      setListOne((prov) => prov - 1)
    } else if (index === listOne + 3 && index < images.length) {
      setListOne((prov) => prov + 1)
    }
    setBigImage(index)
  }

  return (
    <div className="product_introduce">
      <div className="product_introduce_top">
        <div className="introduce_image">
          <div className="big-image">
            <img src={images[bigImage]} alt={images[bigImage]} />
          </div>
          <div className="small-image">
            <ul style={{ transform: `translateX(-${listOne * 25}%)` }}>
              {images.map((item, index) =>
                <li
                  key={item}
                  onClick={() => handleSmallImage(index)}
                  className={index === bigImage ? 'active' : ''}>
                  <img src={item} alt={item} />
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="introduce_content">
          <h2 className='content_title'>商品說明</h2>
          <div className="content_feature">
            {content.feature.map(ft =>
              <h3 key={ft}>⁕ {ft}</h3>)}
          </div>
          <div className="content_text">
            {content.text.map(text =>
              <div key={text} ><span>• </span><p>{text}</p></div>)}
          </div>
          <div className="content_transportation">
            <h3>運送方式 : </h3>
            <ul>
              {content.transportation.map(ts =>
                <p key={ts}>{ts}</p>)}
            </ul>
          </div>
          <div className="introduce_payment">
            <div className="payment_color">
              <h3>顏色 : </h3>
              {content.color.map((color, index) =>
                <li
                  key={color}
                  style={{ backgroundColor: `#${color}` }}
                  className={index === colorNumber ? 'active' : ''}
                  onClick={() => setColorNumber(index)}
                />)}
            </div>
            <div className="payment_quantity">
              <h3>數量 : </h3>
              <Quantity
                quantity={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                clickPlus={() => quantity < 99 && setQuantity(prov => prov + 1)}
                clickMinus={() => quantity > 1 && setQuantity(prov => prov - 1)}
              />
            </div>
            <div className="payment_price">
              <h3>總價 : </h3>
              <p>${content.price * quantity}</p>
            </div>
            <div className="payment_submit">
              <div className="addShoppingCart">加入購物車</div>
            </div>

          </div>

        </div>

      </div>


    </div>
  )
}
export default ProductIntroduce