import 'styles/recommend.scss';
import ProductCard from "./ProductCard"

type productCard = {
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
const Recommend = (props: { products: productCard[] }) => {
  const { products } = props
  return (
    <div className="recommend">
      <h3 className='recommend-title'>熱門推薦</h3>
      <div className="recommend-list">
        {products.map(pd =>
          <ProductCard
            key={pd.image}
            image={pd.image}
            description={pd.description}
            info={pd.info}
          />)}
      </div>
    </div>
  )
}
export default Recommend