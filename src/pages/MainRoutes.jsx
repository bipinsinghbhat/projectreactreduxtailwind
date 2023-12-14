import { Route, Routes } from "react-router-dom"
import AllProduct from "../components/AllProduct"
import Cart from "../components/Cart"
import SingleUserPage from "../components/SingleUserPage"
import Checkout from "../components/Checkout"

const MainRoutes=()=>{
    return (

    <Routes>
         <Route path="/"  element={<AllProduct/>}   />
         <Route path="/Cart"  element={<Cart/>}   />
         <Route path="/Checkout"  element={<Checkout/>}/>
         <Route path="/:product_id" element={<SingleUserPage />} />
        
    </Routes>
    )
}
export default MainRoutes