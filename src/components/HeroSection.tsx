import { ShoppingBag } from "feather-icons-react";

const HeroSection = () => {
  return (
    <div className="bg-[linear-gradient(135deg,_#1a2a3c,_#3a4d6a)]    py-20 h-208">
      <div className="pt-30">
        <h1 className=" text-white/80 text-center text-7xl font-bold ">
          Premium Tech
        </h1>
        <h1 className=" text-blue-500 text-center text-7xl font-bold">
          Made Simple
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto text-center pt-7">
          Discover the latest in technology with our curated collection of
          premium devices, accessories, and gadgets designed for the modern
          lifestyle.
        </p>
        <div className="flex flex-row justify-center">
          <button className="flex flex-row bg-white h-10 w-45 items-center justify-center rounded-md hover:scale-110 cursor-pointer transition-bounce">
            <ShoppingBag className="mr-5" />
            Shop Now
          </button>
          <button className="flex flex-row bg-white h-10 w-45 items-center justify-center rounded-md mx-5 hover:scale-110 cursor-pointer transition-bounce">
            Explore categories
          </button>
        </div>
        <div className="flex flex-row justify-evenly mt-30">
          <div>
            <h1 className="text-center text-blue-500 text-5xl font-bold">
              1000+
            </h1>
            <h1 className="text-center text-white/60">Products</h1>
          </div>
          <div>
            <h1 className="text-center text-blue-500 text-5xl font-bold">
              50k+
            </h1>
            <h1 className="text-center text-white/60">Happy Customers</h1>
          </div>
          <div>
            <h1 className="text-center text-blue-500 text-5xl font-bold">
              24/7
            </h1>
            <h1 className="text-center text-white/60">Support</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
