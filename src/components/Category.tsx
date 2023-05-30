import 'styles/category.scss';
type props = {
  id: string,
  title: string,
  onClick: (id: string) => void,
}
const Category = (props: props) => {
  const { id, title, onClick } = props
  return (
    <div className='category' onClick={() => onClick(id)}>
      <div className="category-title">{title}</div>
    </div>
  )
}
export default Category