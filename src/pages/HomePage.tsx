import dummy from 'dummy/dummy';

import 'styles/homePage.scss';
import Header from "components/Header"
import Banner from 'components/Banner';
import ProductCard from 'components/ProductCard';
import Footer from 'components/Footer';


const HomePage = () => {
  return (
    <>
      <Header />
      <main className="home_main">
        <Banner bannerList={dummy.banner} />
        <div className="products">
          <div className="products_container container">
            {dummy.products.map((dp, index) =>
              <ProductCard
                key={index}
                image={dp.image}
                description={dp.description}
                info={dp.info}
              />)}

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default HomePage