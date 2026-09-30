import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import ProductCard from "../CommonComponent/ProductCard";
import {
  selectProducts,
  selectFavorites,
} from "../Redux/productSlice";

const Favorites = () => {
  const products = useSelector(selectProducts);
  const favorites = useSelector(selectFavorites);

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <div className="min-w-0 w-full">

      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-[#172B3A]">
          Favorites
        </h1>

        <p className="mt-1 text-sm text-[#718292]">
          Your favorite products
        </p>
      </div>

      {favoriteProducts.length === 0 ? (
        <div className="rounded-xl p-10 text-center">
          <Heart className="mx-auto mb-3 text-gray-300" size={30} />

          <p className="text-lg font-medium text-[#172B3A]">
            No favorites yet
          </p>

          <p className="mt-1 text-sm text-[#718292]">
            Click the heart icon on a product to add it to favorites.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {favoriteProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default Favorites;