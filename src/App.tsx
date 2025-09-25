import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBarComponent from "./components/NavBar";
import AllProducts from "./components/allProducts";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col ">
        <NavBarComponent />
        <HeroSection />
        <div className="bg-white h-800">
          <AllProducts />
        </div>
      </div>
    </>
  );
}

export default App;
