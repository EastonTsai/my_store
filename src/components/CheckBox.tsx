import 'styles/checkBox.scss';
import { ReactComponent as CheckedIcon } from 'files/icon/🦆 icon _check_.svg'

interface props {
  checked: boolean
}
const CheckBox = ({ checked }: props) => {

  return (
    <div className="check-box">{checked && <CheckedIcon />}</div>
  )
}
export default CheckBox