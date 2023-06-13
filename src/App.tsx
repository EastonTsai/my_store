import "./styles/app.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminPage from "./pages/AdminPage"
import LoginPage from "pages/LoginPage"
import ProductPage from "./pages/ProductPage"
import CartPage from "pages/CartPage"
import HomePage from "./pages/HomePage"

const basename = process.env.PUBLIC_URL
const App = () => {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path='/admin' element={<AdminPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App