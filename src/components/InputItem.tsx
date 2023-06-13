import 'styles/inputItem.scss';

interface inputType {
  type?: string,
  placeholder: string,
  value: string | number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
const InputItem = (props: inputType) => {
  const { type, placeholder, value, onChange } = props
  return (
    <>
      <div className="input-item">
        <input
          type={type ? type : 'text'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  )
}
export default InputItem