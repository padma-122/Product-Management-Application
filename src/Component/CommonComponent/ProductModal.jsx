import { useEffect } from "react";
import { X } from "lucide-react";
import FormInput from "./FormInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import productSchema from "../Constant/Validation";

const emptyForm = {
  title: "",
  description: "",
  category: "",
  price: "",
  stock: "",
  brand: "",
  discountPercentage: "",
  thumbnail: "",
};

const ProductModal = ({ isOpen, onClose, onSave, product }) => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm({
    resolver: yupResolver(productSchema),
    defaultValues: emptyForm,
  });

  useEffect(() => {
    if (product) {
      reset({
        title: product.title || "",
        description: product.description || "",
        category: product.category || "",
        price: product.price || "",
        stock: product.stock || "",
        brand: product.brand || "",
        discountPercentage: product.discountPercentage || "",
        thumbnail: product.thumbnail || "",
      });
    } else {
      reset(emptyForm);
    }
  }, [product, isOpen, reset]);

  if (!isOpen) {
    return null;
  }

  const onSubmit = (data) => {
    const productData = {
      ...data,
      id: product ? product.id : Date.now(),
      price: Number(data.price),
      stock: Number(data.stock),
      discountPercentage: Number(data.discountPercentage) || 0,
      rating: product?.rating || 0,
    };

    onSave(productData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="thin-scrollbar max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-4 sm:px-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {product ? "Edit Product" : "Create Product"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {product
                ? "Update product information"
                : "Add a new product"}
            </p>
          </div>
          <button type="button" onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-900">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-5 sm:p-6" >
          <FormInput
            label="Product Name *"
            placeholder="Enter product name"
            error={errors.title?.message}
            {...register("title")}
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category *
            </label>

            <select
              {...register("category ")}
              className={`w-full rounded-lg border bg-white px-4 py-3 text-sm outline-none transition focus:ring-2 ${
                errors.category
                  ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                  : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
              }`}
            >
              <option value="">Select category</option>
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="groceries">Groceries</option>
            </select>

            {errors.category && (
              <p className="mt-1 text-xs text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description *
            </label>

            <textarea
              {...register("description")}
              placeholder="Enter product description"
              rows={4}
              className={`w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
                errors.description
                  ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                  : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
              }`}
            />

            {errors.description && (
              <p className="mt-1 text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Price + Stock */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <FormInput
              label="Price *"
              type="number"
              placeholder="Enter price"
              error={errors.price?.message}
              {...register("price")}
            />

            <FormInput
              label="Stock *"
              type="number"
              placeholder="Enter stock"
              error={errors.stock?.message}
              {...register("stock")}
            />

          </div>

          {/* Brand + Discount */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <FormInput
              label="Brand *"
              placeholder="Enter brand"
              error={errors.brand?.message}
              {...register("brand")}
            />

            <FormInput
              label="Discount %*"
              type="number"
              placeholder="Enter discount"
              error={errors.discountPercentage?.message}
              {...register("discountPercentage")}
            />

          </div>
          <FormInput
            label="Image URL *"
            type="url"
            placeholder="https://example.com/image.jpg"
            error={errors.thumbnail?.message}
            {...register("thumbnail")}
          />

          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-200 px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-[#2563eb] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1d4ed8]"
            >
              {product ? "Update Product" : "Create Product"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default ProductModal;