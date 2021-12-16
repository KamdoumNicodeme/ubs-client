import './App.css';

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {Route, Routes} from "react-router-dom";

function App() {
    return (

        <div>
           {/* <Register/>*/}
           {/* <Cart/>*/}

           <Routes>
               <Route path="/" exact element ={<Home/>}/>
               <Route path="/login"  element ={<Login/>}/>
               <Route path="/cart"  element ={<Cart/>}/>
               <Route path="/product"  element ={<Product/>}/>
               <Route path="/productList"  element ={<ProductList/>}/>
               <Route path="/register"  element ={<Register/>}/>
           </Routes>
        </div>
    );
}

export default App;
