import dummy from 'dummy/dummy';

// import 'styles/homePage.scss';
import Header from "components/Header"
import Banner from 'components/Banner';


const HomePage = () => {
  return (
    <>
      <Header />
      <main className="home_main">
        <Banner bannerList={dummy.banner} />
      </main>
    </>
  )
}
export default HomePage