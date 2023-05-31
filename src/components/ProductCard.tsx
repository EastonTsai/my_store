
import 'styles/productCard.scss';

type props = {
  image: string,
  description: string,
  info: {
    price: string | number,
    isSale: boolean,
    isLimitedTime: boolean,
    isAddPurchase: boolean,
    isGiveaway: boolean,
  }
}
const ProductCard = (props: props) => {
  const { image, description, info } = props
  return (
    <div className="product-card">
      <div className="product_image">
        <img src={image} alt={image} />
      </div>
      <div className="product_description">{description}</div>
      <div className="product_info">
        <div className="info-label">
          {info.isSale && <div className="label-1">優惠商品</div>}
          {info.isLimitedTime && <div className="label-2">限時特價</div>}
          {info.isAddPurchase && <div className="label-3">加購價</div>}
          {info.isGiveaway && <div className="label-4">贈品</div>}
        </div>
        <div className="info-price">
          <div className='info-price_top'>團購價</div>
          <div className='info-price_middle'>{info.price}</div>
          <div className='info-price_button'>原價 <s>1580</s></div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard