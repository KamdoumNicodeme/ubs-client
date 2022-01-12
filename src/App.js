import './App.css';

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {

    const user = true;
    return (

        <div>
           {/* <Register/>*/}
           {/* <Cart/>*/}

           <Routes>
               <Route path="/" exact element ={<Home/>}/>
               <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>


               <Route path="/cart"  element ={<Cart/>}/>
               <Route path="/product"  element ={<Product/>}/>
               <Route path="/products/:category"  element ={<ProductList/>}/>
               <Route path="/product/:id"  element ={<Product/>}/>
               <Route path="/register"  element ={user ? <Navigate to="/" /> : <Register/>}/>
           </Routes>
        </div>
    );
}

export default App;
