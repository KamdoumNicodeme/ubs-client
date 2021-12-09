import {categories} from "../Data";
import CategoryItems from "./CategoryItems";

function Categories() {

        return (

            //container
            <div className="flex p-5 justify-between">
                {categories.map(item =>(
                    <CategoryItems item ={item} key={item.id}/>
                ))}
            </div>
        );

}

export default Categories;