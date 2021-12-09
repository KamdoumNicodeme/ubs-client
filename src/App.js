import './App.css';
import Navbar from "./components/Navbar";
import Announcement from "./components/announcement";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import Products from "./components/Products";
import NewLetters from "./components/NewLetters";

function App() {
    return (

        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewLetters/>
        </div>
    );
}

export default App;
