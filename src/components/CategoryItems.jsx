import {Link} from "react-router-dom";

function CategoryItems({item})  {

        return (
            //container
            <div className="flex-1 m-1  relative" style={{height:`${70}vh`}}>

                <Link to={`/products/${item.cat}`}>
                    <img src={item.img} alt="" className="w-full h-full object-cover"/>

                    {/*info*/}
                    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center flex-col">
                        <h1 className="text-4xl font-medium tracking-wider text-white mb-5" >{item.title}</h1>
                        <button className="bg-white text-gray-400 border-none p-2.5 pointer font-semibold">SHOP NOW</button>
                    </div>
                </Link>


            </div>
        );

}

export default CategoryItems;