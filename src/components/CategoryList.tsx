import dummyData from 'dummy/dummy.js'
import 'styles/categoryList.scss';
import Category from "./Category"
const dummy = dummyData;


const CategoryList = () => {

  const handleCategory = () => { }

  return (
    <div className="category-list" >
      {
        dummy.categoryList.map(cg =>
          <Category
            key={cg.title}
            id={cg.title}
            title={cg.title}
            onClick={handleCategory}
          />)
      }
    </div >


  )
}
export default CategoryList