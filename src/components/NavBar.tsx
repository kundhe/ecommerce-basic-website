import { ShoppingCart } from "feather-icons-react";

const NavBarComponent = () => {
  return (
    <nav className="bg-white flex flex-row justify-between px-5 py-5 fixed w-full top-0 opacity-98">
      <div className="text-lg font-bold">Cloth Store</div>
      <div className="hidden md:flex items-center space-x-4">
        <div>
          <ShoppingCart className="" />
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
