import dummy from "dummy/dummy"

import 'styles/productPage.scss';
import Footer from "components/Footer"
import Header from "components/Header"
import ProductIntroduce from "components/ProductIntroduce"
import Recommend from "components/Recommend";

const introduce = dummy.introduce


const ProductPage = () => {
  return (
    <>
      <Header />
      <main className="product">
        <div className="product_container container">
          <ProductIntroduce
            images={introduce.images}
            content={introduce.content}
          />
          <div className="product_detail">
            <div className='detail_list'>
              <li><label htmlFor="picture_checkbox">商品介紹</label></li>
              <li><label htmlFor="specification_checkbox">詳細規格</label></li>
            </div>
            <input type="checkbox" id="picture_checkbox" />
            <input type="checkbox" id="specification_checkbox" />

            <div className="side-page">
              <div className="side-page_picture">
                <label htmlFor='picture_checkbox' className="back">X</label>
                <div className="picture_wrap">
                  {introduce.images.map(image =>
                    <img key={image} src={image} alt={image} />)}
                </div>
              </div>
              <div className="side-page_specification">
                <label htmlFor='specification_checkbox' className="back">X</label>
                <table>
                  <thead>
                    <tr>
                      <th>項目</th>
                      <th>規格</th>
                    </tr>
                  </thead>
                  <tbody>
                    {introduce.content.specification.map(sp =>
                      <tr key={sp.title}>
                        <th>{sp.title}</th>
                        <th>{sp.content}</th>
                      </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Recommend products={dummy.products} />
        </div>
      </main>
      <Footer />
    </>
  )
}
export default ProductPage