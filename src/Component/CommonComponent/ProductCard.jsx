import { useNavigate } from "react-router-dom";
import { Heart, Pencil, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite, selectFavorites } from "../Redux/productSlice";

const ProductCard = ({ product , onEdit , onDelete }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(product.id);

  const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div  onClick={() => navigate(`/products/${product.id}`)} className=" relative flex h-48 items-center justify-center bg-gray-50 p-4">
        <img src={product.thumbnail} alt={product.title} className="h-full w-full object-contain"/>
          <button onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleFavorite(product.id));
          }}
        className={`absolute z-10 right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition ${
          isFavorite
            ? "text-red-500"
            : "text-gray-400 hover:text-red-500"
        }`}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
        <Heart size={18} fill={isFavorite ? "currentColor" : "none"} />
      </button>
    </div>
      <div className="flex items-start justify-between p-4">
        <div className="min-w-0 pr-2">
          <h3 className="truncate text-base font-semibold text-gray-900 sm:text-lg">
            {product.title}
          </h3>

          <p className="mt-1 text-sm capitalize text-gray-400">
            {product.category}
          </p>
        </div>
      <div className="flex shrink-0 items-center gap-1">
        <button onClick={(e) => {
            e.stopPropagation(); 
            onEdit(product);
          }} title="Edit"
          className="flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900">
          <Pencil size={16} />
        </button>

        <button onClick={(e) => {
            e.stopPropagation();
            onDelete(product.id);
          }} title="Delete"
          className="flex h-8 w-8 items-center justify-center rounded-full text-red-500 transition hover:bg-red-50 hover:text-red-600">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;