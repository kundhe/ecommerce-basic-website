import { Heart } from "feather-icons-react";
import { useParams } from "react-router-dom";
import { useGetSpecificProductQuery } from "../store/slices/productSlice";

const ProductPage = ({}) => {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id, 10) : 0;

  const { data: product } = useGetSpecificProductQuery(productId);

  if (!product) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <img className="w-fit" src={product.image} alt="" />
      <div className="p-5">
        <div className="bg-black/5 text-black w-fit px-3 py-1 rounded-lg text-[12px] font-semibold">
          {product.category}
        </div>
        <h1 className="font-semibold text-xl mt-3">{product.title}</h1>
        <p className="mt-2 text-black/55 text-[15px] line-clamp-3 break-words">
          {product.description}
        </p>
        <h1 className="text-xl font-bold my-8">$299</h1>
        <div className="w-full h-0.5 bg-black/15"></div>
        <div className="flex flex-row mt-7 gap-3">
          <button className="flex-10 bg-blue-950 h-12 text-center text-white rounded-lg">
            Add to cart
          </button>
          <button className="flex flex-1 bg-white border border-black/15 rounded-lg justify-center items-center">
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
