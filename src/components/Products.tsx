
import 'styles/products.scss';
type product = {
  image: string,
  description: string,
  info: {
    price: string | number,

  }
}

const Products = (props: { products: product[] }) => {
  const { products } = props
  console.log('1', products)
  return (
    <div className="products">
      <div className="products_container container">
      </div>
    </div>
  )
}
export default Products