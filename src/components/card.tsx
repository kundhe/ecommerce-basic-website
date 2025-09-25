import { Link } from "react-router-dom";
import { useGetProductQuery } from "../store/slices/productSlice";

const Card = () => {
  const { data: product } = useGetProductQuery();

  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-10 justify-evenly">
      {product && product.length > 0 ? (
        product.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="border border-black/15 rounded-[30px] w-[300px] shadow-md hover:shadow-xl transition"
          >
            <img
              className="rounded-t-[30px] h-[200px] w-full object-contain bg-gray-100"
              src={item.image}
              alt={item.title}
            />
            <div className="p-5">
              <div className="bg-black/5 text-black w-fit px-3 py-1 rounded-lg text-[12px] font-semibold">
                {item.category}
              </div>
              <h1 className="font-semibold text-xl mt-3">{item.title}</h1>
              <p className="mt-2 text-black/55 text-[15px] line-clamp-3">
                {item.description}
              </p>
              <h1 className="text-xl font-bold my-8">${item.price}</h1>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500 text-center col-span-2">
          Loading products...
        </p>
      )}
    </div>
  );
};

export default Card;
