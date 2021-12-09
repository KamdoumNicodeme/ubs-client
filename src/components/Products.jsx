import {popularProducts} from "../Data";
import Product from "./Product";

function Products()   {

        return (
            //container
            <div className="p-5 flex flex-wrap justify-between">
                {popularProducts.map(item=>(

                    <Product item={item} key={item.id}/>
                ))}
                
            </div>
        );

}

export default Products;