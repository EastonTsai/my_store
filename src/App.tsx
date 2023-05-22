import "./styles/app.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import AdminPage from "./pages/AdminPage"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"

const App = () => {
  const [colorModal, setColorModal] = useState<string>('')
  return (
    <div className={colorModal}>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<AdminPage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App