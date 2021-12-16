import Navbar from "../components/Navbar";
import Announcement from "../components/announcement";
import Products from "../components/Products";
import NewLetters from "../components/NewLetters";
import Footer from "../components/Footer";

function ProductList() {

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
                        <select className="p-3 mr-5 border-black border-opacity-100">
                            <option disabled selected>Color</option>
                            <option >White</option>
                            <option >Black</option>
                            <option >Red</option>
                            <option >Blue</option>
                            <option >Green</option>
                            <option >Yellow</option>
                        </select>
                        <select className="p-3 mr-5 border-black border-opacity-100">
                            <option disabled selected>Size</option>
                            <option >XS</option>
                            <option >S</option>
                            <option >M</option>
                            <option >L</option>
                            <option >XL</option>
                            <option >XXL</option>
                        </select>
                    </div>
                    <div className="m-6">
                        <span className="text-2xl font-semibold">Sort products:</span>

                        <select className="p-3 mr-5 border-black border-opacity-100	">
                            <option  selected>Newest</option>
                            <option >Price(asc)</option>
                            <option >price(desc)</option>

                        </select>

                    </div>
                </div>
                <Products/>
                <NewLetters/>
                <Footer/>
            </div>
        );
    
}

export default ProductList;

