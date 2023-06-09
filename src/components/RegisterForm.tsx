import InputItem from "./InputItem"
import { useState } from 'react';



const RegisterForm = () => {
  const [account, setAccount] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkedPassword, setCheckedPassword] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {

  }


  return (
    <div className="register-form">
      <h1>註冊</h1>
      <label>
        <p>帳號 :</p>
        <InputItem
          value={account}
          placeholder='請設定帳號'
          onChange={(e) => setAccount(e.target.value)}
        />
      </label><label>
        <p>E-mail :</p>
        <InputItem
          type="email"
          value={email}
          placeholder='請設定 e-mail'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label><label>
        <p>密碼 :</p>
        <InputItem
          type="password"
          value={password}
          placeholder='請設定密碼'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        <p>確認密碼 :</p>
        <InputItem
          type="password"
          value={checkedPassword}
          placeholder='請確認設定密碼'
          onChange={(e) => setCheckedPassword(e.target.value)}
        />
      </label>
      <button onSubmit={handleSubmit}>送出註冊</button>

    </div>
  )
}
export default RegisterForm