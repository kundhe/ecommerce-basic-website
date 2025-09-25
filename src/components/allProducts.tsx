import Card from "./card";

const AllProducts = () => {
  return (
    <div>
      <h1 className=" text-black text-center mt-20 text-4xl font-bold">
        Featured Products
      </h1>
      <div className="mt-8">
        <p className="text-center font-medium text-xl opacity-55">
          Discover our handpicked selection of premium tech products designed{" "}
          <br />
          to enhance your digital lifestyle.
        </p>
      </div>
      <div className="flex flex-row my-15 mx-18 justify-evenly">
        <Card />
      </div>
    </div>
  );
};

export default AllProducts;
