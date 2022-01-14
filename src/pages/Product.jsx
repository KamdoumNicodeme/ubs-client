import Navbar from "../components/Navbar";
import Announcement from "../components/announcement";
import NewLetters from "../components/NewLetters";
import Footer from "../components/Footer";
import {FaMinus, FaPlus} from "react-icons/all";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {publicRequest} from "../requestMethod";
import axios from "axios";


function Product() {

    const location = useLocation();

    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});

    const [quantity, setQuantity] = useState(1);

    const [color, setColor] = useState("");

    const [size, setSize] = useState("");

    useEffect(() => {

        const getProduct = async () => {
            try {

                const res = await publicRequest.get("/products/find/" + id);

                setProduct(res.data);

            } catch (err) {

                console.log(err)
            }
        };
        getProduct().then();

    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }

    }

    const handleClick = ()=>{

        axios.post()

    }

    return (
        <div>
            <Navbar/>
            <Announcement/>
            {/*container*/}
            <div className="flex">
                {/*wrapper*/}
                <div className="p-8 flex">
                    {/*    image container*/}
                    <div className="flex-1 w-full object-cover" style={{height: `${90}vh`}}>
                        <img src={product.image} alt=""/>
                    </div>
                    {/*    info container*/}
                    <div className=" p-5 flex-1" style={{padding: `${0}px ${50}px`}}>
                        <h1 className="font-bold text-3xl m-5">{product.title}</h1>
                        <p className="m-5">{product.description}</p>
                        <span className="font-thin text-2xl m-5 font-semibold"> price $ {product.price}</span>

                        {/*    filterContainer*/}
                        <div className="flex justify-between w-1/2 m-5">
                            {/*    filter*/}
                            <div className="flex items-center">
                                {/*    filerTitle*/}
                                <span className=" text-2xl font-extralight">Color</span>

                                {product.color?.map((c) => (
                                        <div className="h-8 w-8 rounded-full m-1 cursor-pointer"
                                             style={{backgroundColor: `${c}`}} key={c} onClick={()=>setColor(c)}/>

                                    )
                                )}


                            </div>

                            <div className="flex items-center">
                                {/*    filerTitle*/}
                                <span className=" text-2xl font-extralight">Size</span>
                                <select className="ml-2 p-2" onChange={(e)=>setSize(e.target.value)}>
                                    {product.size?.map((s) => (
                                        <option key={s}>{s}</option>
                                    ))}


                                </select>

                            </div>
                        </div>
                        {/*    Add container*/}
                        <div className="flex items-center w-1/2 justify-between">
                            {/*Amount*/}

                            {/*    Amount container*/}
                            <div className="flex items-center font-bold">
                                <FaMinus onClick={() => handleQuantity("dec")}/>
                                <span className="w-6 h-6 flex items-center justify-center m-2"
                                      style={{borderRadius: `${10}px`, border: `${2}px solid blue`}}>{quantity}</span>
                                <FaPlus onClick={() => handleQuantity("inc")}/>
                            </div>

                            <button className="p-3 cursor-pointer bg-white font-medium hover:bg-purple-200"
                                    style={{border: `${2}px solid blue`}} onClick={()=>handleClick}>ADD TO CART
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <NewLetters/>
            <Footer/>

        </div>
    );

}

export default Product;