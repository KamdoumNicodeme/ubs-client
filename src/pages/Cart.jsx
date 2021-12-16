import Navbar from "../components/Navbar";
import Announcement from "../components/announcement";
import Footer from "../components/Footer";
import {FaMinus, FaPlus} from "react-icons/all";

function Cart() {

    return (
        <div>
            <Navbar/>
            <Announcement/>
            {/*wapper */}
            <div className="p-5 ">
                <h1 className="text-4xl font-medium text-center"> YOU BAG</h1>
                {/*    top*/}
                <div className="flex items-center justify-between">
                    <button className="p-5 font-extrabold cursor-pointer bg-gray-300 bg-transparent">CONTINUE SHOPPING
                    </button>
                    {/*texts*/}
                    <div>
                        <span className="underline cursor-pointer m-2">Shopping bag(2)</span>
                        <span className="underline cursor-pointer m-2">Your whitelist(2)</span>
                    </div>
                    <button className="p-5 font-extrabold cursor-pointer bg-black bg-transparent text-white"
                            type="filled">CHECK OUT NOW
                    </button>

                </div>

                {/*    bottom*/}

                <div className="flex  justify-between p-5 items-center ">
                    {/*    info*/}
                    <div className="flex-3" >
                        {/*    product*/}
                        <div className="flex justify-between m-5">
                            {/*    product detail*/}
                            <div  className="flex flex-2">
                                <img src="https://i.ibb.co/rFDkXHn/2c80c597b8049bf259da5c5191705027.jpg" alt="" className="w-13"/>
                                {/*details*/}
                                <div className="p-5 flex flex-col justify-around">
                                    <span> <b> Product: </b> JESSIE THUNDER T-SHIRT</span>
                                    <span> <b> ID: </b> 32423432444</span>
                                    <div className="w-20px h-20px rounded-full bg-black"/>
                                    <span> <b> Size: </b> 37.5</span>
                                </div>
                            </div>
                            {/*    price*/}

                            <div className="flex flex-1 items-center justify-center flex-col">
                            {/*    product amount contianer */}
                                <div className="flex items-center mb-5">
                                    <FaPlus/>
                                    <div className="text-2xl font-medium">2</div>
                                    <FaMinus/>
                                </div>
                                <div className="font-light text-3xl">$40</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="flex justify-between m-5">
                            {/*    product detail*/}
                            <div  className="flex flex-2">
                                <img src="https://i.ibb.co/rFDkXHn/2c80c597b8049bf259da5c5191705027.jpg" alt="" className="w-13"/>
                                {/*details*/}
                                <div className="p-5 flex flex-col justify-around">
                                    <span> <b> Product: </b> JESSIE THUNDER T-SHIRT</span>
                                    <span> <b> ID: </b> 32423432444</span>
                                    <div className="w-20px h-20px rounded-full bg-yellow-400"/>
                                    <span> <b> Size: </b> 37.5</span>
                                </div>
                            </div>
                            {/*    price*/}

                            <div className="flex flex-1 items-center justify-center flex-col">
                            {/*    product amount contianer */}
                                <div className="flex items-center mb-5">
                                    <FaPlus/>
                                    <div className="text-2xl font-medium">2</div>
                                    <FaMinus/>
                                </div>
                                <div className="font-light text-3xl">$40</div>
                            </div>
                        </div>
                    </div>
                    {/*    summary*/}
                    <div className="flex-1 border-2 border-solid border-gray-200 p-5" style={{borderRadius:`${10}px`,height:`${50}vh`}}>
                        <h1 className="text-3xl text-center">ORDER SUMMARY</h1>
                    {/*    summary item*/}
                        <div className="p-6 flex justify-between">
                            <h1>Subtotal</h1>
                            <h1>$ 80</h1>
                        </div>
                        <div className="p-6 flex justify-between">
                            <h1>Estimated Shipping</h1>
                            <h1>$ 5.90</h1>
                        </div>
                        <div className="p-6 flex justify-between">
                            <h1>Shipping discount</h1>
                            <h1>$ -5.90</h1>
                        </div>
                        <div className="p-6 flex justify-between text-2xl">
                            <h1 >total</h1>
                            <h1>$ 80</h1>
                        </div>
                        <button className="bg-black text-white font-extrabold w-full p-2.5">CHECKOUT NOW</button>
                    </div>

                </div>
            </div>

            <Footer/>

        </div>
    );

}

export default Cart;