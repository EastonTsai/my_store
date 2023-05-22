
type props = {
  className: string,
  title: string,
  image: string,
  onClick: () => void
}


const ListCard = (props: props) => {
  const { className, title, image, onClick } = props
  return (
    <>
      <div className={className} onClick={onClick}>
        <img src={image} alt={title} />
        <div className="title">{title}</div>
      </div>
    </>
  )
}
export default ListCard