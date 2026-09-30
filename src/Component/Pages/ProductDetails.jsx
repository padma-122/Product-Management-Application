import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Package,
  Tag,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { selectProducts } from "../Redux/productSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = useSelector(selectProducts);

  const product = products.find(
    (product) => product.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(
    product?.thumbnail || ""
  );

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Product not found
        </h2>

        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const images = product.images?.length
    ? product.images
    : [product.thumbnail];

  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
        >
          <ArrowLeft size={18} />
          Back to Products
        </button>

        {/* Product Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

          {/* Main Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">

            {/* ================= IMAGE SECTION ================= */}
            <div className="border-b border-gray-100 bg-gray-50 p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">

              {/* Main Image */}
              <div className="flex h-[280px] items-center justify-center rounded-xl bg-white p-5 sm:h-[380px] md:h-[450px] lg:h-[520px]">
                <img
                  src={selectedImage}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Image Thumbnails */}
              {images.length > 1 && (
                <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border bg-white p-1 transition sm:h-20 sm:w-20 ${
                        selectedImage === image
                          ? "border-blue-500 ring-2 ring-blue-100"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="h-full w-full object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}

            </div>

            {/* ================= DETAILS SECTION ================= */}
            <div className="p-5 sm:p-7 md:p-8 lg:p-10">

              {/* Category */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold capitalize text-blue-600">
                  {product.category}
                </span>

                {product.availabilityStatus && (
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                    {product.availabilityStatus}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm font-semibold text-gray-800">
                    {product.rating}
                  </span>
                </div>

                <span className="text-sm text-gray-400">
                  / 5
                </span>
              </div>

              {/* Price */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                  {product.discountPercentage}% OFF
                </span>
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-gray-100" />

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  Description
                </h2>

                <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                  {product.description}
                </p>
              </div>

              {/* Product Information */}
              <div className="mt-7">
                <h2 className="mb-4 text-lg font-semibold text-gray-900">
                  Product Information
                </h2>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {/* Brand */}
                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <Tag
                      size={20}
                      className="mt-0.5 shrink-0 text-gray-500"
                    />

                    <div className="min-w-0">
                      <p className="text-xs text-gray-400">
                        Brand
                      </p>

                      <p className="mt-1 break-words text-sm font-medium text-gray-800">
                        {product.brand || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Stock */}
                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <Package
                      size={20}
                      className="mt-0.5 shrink-0 text-gray-500"
                    />

                    <div>
                      <p className="text-xs text-gray-400">
                        Stock
                      </p>

                      <p className="mt-1 text-sm font-medium text-gray-800">
                        {product.stock}
                      </p>
                    </div>
                  </div>

                  {/* SKU */}
                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <Layers
                      size={20}
                      className="mt-0.5 shrink-0 text-gray-500"
                    />

                    <div className="min-w-0">
                      <p className="text-xs text-gray-400">
                        Return Policy
                      </p>

                      <p className="mt-1 break-words text-sm font-medium text-gray-800">
                        {product.returnPolicy || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Warranty */}
                  <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                    <ShieldCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-gray-500"
                    />

                    <div className="min-w-0">
                      <p className="text-xs text-gray-400">
                        Warranty
                      </p>

                      <p className="mt-1 break-words text-sm font-medium text-gray-800">
                        {product.warrantyInformation || "N/A"}
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;