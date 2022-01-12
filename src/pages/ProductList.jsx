import Navbar from "../components/Navbar";
import Announcement from "../components/announcement";
import Products from "../components/Products";
import NewLetters from "../components/NewLetters";
import Footer from "../components/Footer";
import {useLocation} from "react-router-dom";
import {useState} from "react";

function ProductList() {

    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handlerFilers = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        });

    }





    return (
        <div>
            <Navbar/>
            <Announcement/>
            <h1 className="font-bold text-3xl m-6"> Dresses</h1>
            {/*    filterContainer*/}
            <div className="flex justify-between">
                {/*    filter*/}
                <div className="m-6">
                    <span className="text-2xl font-semibold mr-5">Filter products:</span>
                    <select className="p-3 mr-5 border-black border-opacity-100" onChange={handlerFilers} name="color">
                        <option disabled>Color</option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Green</option>
                        <option>Yellow</option>
                    </select>
                    <select className="p-3 mr-5 border-black border-opacity-100" onChange={handlerFilers} name="size">
                        <option disabled>Size</option>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                </div>
                <div className="m-6">
                    <span className="text-2xl font-semibold">Sort products:</span>

                    <select className="p-3 mr-5 border-black border-opacity-100	" onChange={e=> setSort(e.target.value)}>
                        <option value="newest" >Newest</option>
                        <option value="asc">Price(asc)</option>
                        <option value="desc">price(desc)</option>

                    </select>

                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort}/>
            <NewLetters/>
            <Footer/>
        </div>
    );

}

export default ProductList;

