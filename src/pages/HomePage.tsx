import 'styles/homePage.scss';
import Header from "components/Header"
import ListCard from 'components/ListCard';
import CategoryList from 'components/CategoryList';

const dummy = {
  hotList: [
    {
      title: '牛仔短褲',
      image: 'https://picsum.photos/400/600?random=1',
    },
    {
      title: '西裝短褲',
      image: 'https://picsum.photos/400/600?random=2',
    },
    {
      title: '背心',
      image: 'https://picsum.photos/400/600?random=3',
    },
    {
      title: 'T 恤',
      image: 'https://picsum.photos/400/600?random=4',
    },
    {
      title: '漁夫帽',
      image: 'https://picsum.photos/400/600?random=5',
    },
    {
      title: '口罩',
      image: 'https://picsum.photos/400/600?random=6',
    },
    {
      title: '旅行組',
      image: 'https://picsum.photos/400/600?random=7',
    },
    {
      title: '生活',
      image: 'https://picsum.photos/400/600?random=8',
    },
  ],
  categoryList: [
    {
      title: '男士',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '女士',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '童裝',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '休閒',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '商務',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '潮流',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '鞋款',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
    {
      title: '包款',
      products: ['項目', '項目', '項目', '項目', '項目', '項目']
    },
  ]
}

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="home_main">
        <div className="home_main_container container">
          {/* <div className="home_main_left">
            <section className="home_main_section">
              <CategoryList />
            </section>
          </div>
          <div className="home_main_right">
            <div className="home_main_right_title">
              TOP
            </div>
            <div className="home_main_right_list">
              {dummy.hotList.map(hot =>
                <ListCard
                  key={hot.title}
                  className='list-card'
                  title={hot.title}
                  image={hot.image}
                  onClick={() => { }}
                />)}
            </div>
          </div> */}
        </div>
      </main>
    </>
  )
}
export default HomePage