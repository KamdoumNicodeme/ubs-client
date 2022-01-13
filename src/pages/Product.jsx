import Navbar from "../components/Navbar";
import Announcement from "../components/announcement";
import NewLetters from "../components/NewLetters";
import Footer from "../components/Footer";
import { FaMinus, FaPlus} from "react-icons/all";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {publicRequest} from "../requestMethod";


function Product() {

    const location = useLocation();

    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});

    useEffect(()=>{

        const getProduct = async ()=>{
            try{

                const res = await publicRequest.get("/products/find/"+id);

                setProduct(res.data);

            } catch (err){

                console.log(err)
            }
        };
        getProduct().then();

    },[id]);

    return (
        <div>
            <Navbar/>
            <Announcement/>
            {/*container*/}
            <div className="flex">
                {/*wrapper*/}
                <div className="p-8 flex" >
                    {/*    image container*/}
                    <div className="flex-1 w-full object-cover" style={{height: `${90}vh`}}>
                        <img src={product.image} alt=""/>
                    </div>
                    {/*    info container*/}
                    <div className=" p-5 flex-1" style={{padding:`${0}px ${50}px`}}>
                        <h1 className="font-bold text-3xl m-5">Denim Jumsuit</h1>
                        <p className="m-5">Post hoc impie perpetratum quod in aliis quoque iam timebatur, tamquam licentia
                            crudelitati indulta per suspicionum nebulas aestimati quidam noxii damnabantur. quorum pars
                            necati, alii puniti bonorum multatione actique laribus suis extorres nullo sibi relicto praeter
                            querelas et lacrimas, stipe conlaticia victitabant, et civili iustoque imperio ad voluntatem
                            converso cruentam, claudebantur opulentae domus et clarae.</p>
                        <span className="font-thin text-2xl m-5 font-semibold"> price $40</span>

                    {/*    filterContainer*/}
                        <div className="flex justify-between w-1/2 m-5">
                        {/*    filter*/}
                            <div className="flex items-center">
                            {/*    filerTitle*/}
                                <span className=" text-2xl font-extralight">Color</span>
                                <div className="h-8 w-8 rounded-full m-1 cursor-pointer" style={{backgroundColor:`${'red'}`}}/>
                                <div className="h-8 w-8 rounded-full m-1 cursor-pointer" style={{backgroundColor:`${'blue'}`}}/>
                                <div className="h-8 w-8 rounded-full m-1 cursor-pointer" style={{backgroundColor:`${'green'}`}}/>
                            </div>

                            <div className="flex items-center">
                                {/*    filerTitle*/}
                                <span className=" text-2xl font-extralight">Size</span>
                                <select className="ml-2 p-2">
                                    <option >XS</option>
                                    <option >S</option>
                                    <option >M</option>
                                    <option >L</option>
                                    <option >XL</option>
                                    <option >XXL</option>
                                </select>

                            </div>
                        </div>
                    {/*    Add container*/}
                        <div className="flex items-center w-1/2 justify-between">
                            {/*Amount*/}

                        {/*    Amount container*/}
                            <div className="flex items-center font-bold">
                                <FaMinus/>
                                <span className="w-6 h-6 flex items-center justify-center m-2" style={{borderRadius:`${10}px`, border:`${2}px solid blue`}}>1</span>
                                <FaPlus/>
                            </div>

                            <button className="p-3 cursor-pointer bg-white font-medium hover:bg-purple-200" style={{ border:`${2}px solid blue`}}>ADD TO CART</button>
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