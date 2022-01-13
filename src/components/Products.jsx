import Product from "./Product";
import {useEffect, useState} from "react";
import axios from "axios";

function Products({cat, filters, sort}) {

    const [product, setProduct] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);


    useEffect(() => {

        const getProduct = async () => {

            try {
                const res = await axios.get(cat ? `http://localhost:5000/api/products?categories=${cat}` : "http://localhost:5000/api/products");

                setProduct(res.data);

            } catch (error) {
                console.log(error);
            }
        }
        getProduct()

    }, [cat]);

    useEffect(() => {
        cat && setFilterProduct(
            product.filter(item => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
            ))
        )


    }, [product, cat, filters]);

    useEffect( ()=>{
        if (sort ==="newest"){
            setFilterProduct((prev)=>
            [...prev].sort((a,b)=>a.createdAt -b.createdAt));
        }else if (sort ==="asc"){
            setFilterProduct((prev)=>
                [...prev].sort((a,b)=>a.price -b.price));
        }
        else{
            setFilterProduct((prev)=>
                [...prev].sort((a,b)=>b.price -a.price));
        }

    },[sort]);


    return (
        //container
        <div className="p-5 flex flex-wrap justify-between">

            { cat ? filterProduct.map((item) => (

                <Product item={item} key={item._id}/>
            )): product.slice(0,8)
                .map((item) => (

                <Product item={item} key={item._id}/>
            ))}

        </div>
    );

}

export default Products;