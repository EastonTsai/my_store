import 'styles/loginPage.scss';
import Header from "components/Header"
import { useState } from 'react';
import LoginForm from 'components/LoginForm';
import RegisterForm from 'components/RegisterForm';

const LoginPage = () => {
  const [state, setState] = useState('login')

  return (
    <div className="login-page">
      <div className="login-page_container container">
        <Header />
        <div className="login-page_main">
          <div className="login-page_main_wrap">
            <div className="options">
              <div
                className={state === 'login' ? 'active' : ''}
                onClick={() => setState('login')}
              >登入</div>
              <div
                className={state === 'register' ? 'active' : ''}
                onClick={() => setState('register')}
              >註冊</div>
            </div>
            {state === 'login' && <LoginForm />}
            {state === 'register' && <RegisterForm />}


          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage