import 'styles/quantity.scss';

type props = {
  quantity: number,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  clickPlus?: (e: React.MouseEvent<HTMLDivElement>) => void,
  clickMinus?: (e: React.MouseEvent<HTMLDivElement>) => void,
}
const Quantity = (props: props) => {
  const { quantity, onChange, clickPlus, clickMinus } = props

  return (
    <div className="quantity">
      <div className="minus"
        onClick={clickMinus}
      >-</div>
      <input className="number"
        type='text'
        value={quantity}
        onChange={onChange}
      />
      <div className="plus"
        onClick={clickPlus}
      >+</div>
    </div>
  )
}
export default Quantity