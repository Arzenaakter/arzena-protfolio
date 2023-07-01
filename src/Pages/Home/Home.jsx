import About from "../../Components/About";
import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Projects from "../../Components/Projects";
import Skills from "../../Components/Skills";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;