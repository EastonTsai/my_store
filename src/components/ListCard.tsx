
import { useState, useRef } from 'react'

type props = {
  className: string,
  title: string,
  items?: string[],
}

const ListCard = (props: props) => {
  const { className, title, items } = props
  const [isShow, setIsShow] = useState(false)
  const handleClick = () => { }

  return (
    <>
      <div className={className}>
        <div
          className='category-title'
          onClick={() => setIsShow(!isShow)}
        >{title}
        </div>
        <ul className={`category-list ${isShow && 'show'}`}>
          {items?.map((item, index) =>
            <li key={index} onClick={() => { }}>- {item}</li>)}
        </ul>
      </div>
    </>
  )
}
export default ListCard