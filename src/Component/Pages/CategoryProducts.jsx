import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { selectProducts } from "../Redux/productSlice";
import ProductCard from "../CommonComponent/ProductCard";
import SkeletonLoading from "../Loaders/SkeletonLoading";

const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const products = useSelector(selectProducts);

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  const categoryName =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="min-w-0 w-full">

      {/* Back Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="mb-5 flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </button>

      {/* Page Heading */}
      <div className="mb-6">

        <h1 className="mt-1 text-2xl font-bold capitalize text-gray-900 sm:text-3xl">
          {categoryName}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {categoryProducts.length} products available
        </p>
      </div>

      {/* Products */}
      {categoryProducts.length > 0 ? (
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[300px] items-center justify-center">
          <p className="text-gray-500">
            No products found in this category.
          </p>
        </div>
      )}

    </div>
  );
};

export default CategoryProducts;