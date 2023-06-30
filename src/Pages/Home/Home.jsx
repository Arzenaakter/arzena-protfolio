import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;