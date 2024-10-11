import Featured from "./components/featured";
import Footer from "./components/footer";
import Slider from "./components/hero-slider";
import Blogs from "./components/latestBlogs";
import Navbar from "./components/navbar";
import Travel from "./components/travelWith";
import VisitPlace from "./components/visitPlaces";
const Index = () => {
  return (
    <>
       <Slider/>
       <Featured/>
       <Travel/>
       <Blogs/>
       <VisitPlace/>
    </>
  );
};

export default Index;
