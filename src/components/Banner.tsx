import 'styles/banner.scss';
import { ReactComponent as Left_Icon } from 'files/icon/🦆 icon _nav arrow left_.svg'
import { ReactComponent as Right_Icon } from 'files/icon/🦆 icon _nav arrow right_.svg'
import { useState } from 'react';
type props = {
  bannerList: { image: string }[]
}

const Banner = (props: props) => {
  const { bannerList } = props
  const [isFocus, setIsFocus] = useState(0)
  const handleControlLeft = () => {
    if (isFocus >= 1) {
      setIsFocus((prop) => prop - 1)
      return
    }
    setIsFocus(bannerList.length - 1)
  }
  const handleControlRight = () => {
    if (isFocus < bannerList.length - 1) {
      setIsFocus((prop) => prop + 1)
      return
    }
    setIsFocus(0)
  }
  return (
    <div className="main_banner">
      <div className="banner_container container">
        <div
          className="banner_images"
          style={{ transform: `translateX(-${isFocus * 100}%)` }}
        >
          {bannerList.map(bl =>
            <li key={bl.image}><img src={bl.image} alt={bl.image} /></li>
          )}
        </div>
        <div className="banner_control">
          <span
            className="banner_control_left"
            onClick={handleControlLeft}
          ><Left_Icon /></span>
          <span
            className="banner_control_right"
            onClick={handleControlRight}
          ><Right_Icon /></span>
          <span className="banner_control_button">
            {bannerList.map((bl, index) =>
              <span
                key={bl.image}
                className={`circle ${index === isFocus && 'focus'}`}
                onClick={() => { }}

              />)}

          </span>
        </div>
      </div>
    </div>
  )
}
export default Banner