import Announcement from "../components/announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewLetters from "../components/NewLetters";
import Footer from "../components/Footer";

function Home( ) {

        return (
            <div>
                <Announcement/>
                <Navbar/>
                <Slider/>
                <Categories/>
                <Products/>
                <NewLetters/>
                <Footer/>
            </div>
        );

}

export default Home;