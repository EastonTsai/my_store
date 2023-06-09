import 'styles/loginForm.scss';
import InputItem from "./InputItem"
import { useState } from 'react';



const LoginForm = () => {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    // e.preventDefault()
  }
  return (
    <div className="login-form">
      <h1>登入</h1>
      <label>
        <p>帳號 :</p>
        <InputItem
          value={account}
          placeholder='請輸入帳號'
          onChange={(e) => setAccount(e.target.value)}
        />
      </label>
      <label>
        <p>密碼 :</p>
        <InputItem
          type="password"
          value={password}
          placeholder='請輸入密碼'
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onSubmit={handleSubmit}>確認登入</button>
    </div>

  )
}
export default LoginForm