import {AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart} from "react-icons/all";

function Product({item}){

        return (

            //container
            <div className="flex-1 flex items-center justify-center bg-blue-100 relative" style={{margin:`${5}px`, minWidth:`${280}px`, height:`${350}px`}}>
                {/*cercle*/}
                <div className="w-48 h-48 rounded-full bg-white absolute">

                </div>
                <img src={item.img} alt="" className="h-3/4" style={{zIndex:`${2}`}}/>
                {/*info*/}
                <div className="absolute top-0 left-0 bg-gray-500 flex items-center justify-center yo opacity-0 hover:opacity-100 transition duration-1000 ease-in-out cursor-pointer" style={{zIndex:`${3}`, height:`${100}%`,width:`${100}%`}}>
                    {/*icon*/}
                    <div  className="rounded-full bg-white flex items-center justify-center w-10 h-10 m-2.5 hover:bg-gray-100 hover:scale-110 transform transition-all transform transition duration-500" >
                        <AiOutlineShoppingCart/>

                    </div>
                    <div  className="rounded-full bg-white flex items-center justify-center w-10 h-10 m-2.5 hover:bg-gray-100 hover:scale-110 transform transition-all transform transition duration-500" >
                        <AiOutlineSearch/>

                    </div>
                    <div  className="rounded-full bg-white flex items-center justify-center w-10 h-10 m-2.5 hover:bg-gray-100 hover:scale-110 transform transition-all transform transition duration-500" >
                        <AiOutlineHeart/>

                    </div>

                </div>
            </div>
        );

}

export default Product;