
type props = {
  title: string,
  onClick: () => void
}

const ListItem = (props: props) => {
  const { title, onClick } = props
  return (
    <li
      onClick={onClick}
    >
      {title}
    </li>
  )
}
export default ListItem