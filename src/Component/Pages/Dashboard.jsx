import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../CommonComponent/Filter";
import Search from "../CommonComponent/Search";
import ProductCard from "../CommonComponent/ProductCard";
import useFetch from "../Hooks/useFetch";
import { setProducts, selectProducts, addProduct, deleteProduct, updateProduct } from "../Redux/productSlice";
import ProductModal from "../CommonComponent/ProductModal";
import SkeletonLoading from "../Loaders/SkeletonLoading";
import ConfirmModal from "../CommonComponent/ConfirmModal";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const productsPerPage = 8;

  const dispatch = useDispatch();

  const products = useSelector(selectProducts);

  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products"
  );

  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
  ];

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");

    if (!savedProducts && data.length > 0) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const startIndex = (currentPage - 1) * productsPerPage;

  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  const handleSaveProduct = (product) => {
    if (editingProduct) {
      dispatch(updateProduct(product));
    } else {
      dispatch(addProduct(product));
    }

    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = (productId) => {
    setProductToDelete(productId);
    setShowDeleteModal(true);
  };

  return (
    <div className="min-w-0 w-full overflow-x-hidden">
      <div className="mb-6 grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:flex lg:items-center lg:justify-end">

        <div className="w-full md:col-span-2 lg:col-span-1 lg:w-[340px]">
          <Search search={search} setSearch={setSearch} />
        </div>

        <div className="w-full md:w-full lg:w-[200px]">
          <Filter
            category={category}
            setCategory={setCategory}
            categories={categories}
          />
        </div>

        <button
          onClick={() => {
            setEditingProduct(null);
            setIsModalOpen(true);
          }}
          className="w-full whitespace-nowrap rounded-lg bg-[#18232C] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#263640] lg:w-auto"
        >
          + Create Product
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonLoading key={index} />
          ))}
        </div>
      )}

      {/* Error */}
      {error && (
        <p className="py-10 text-center text-red-500">
          {error}
        </p>
      )}

      {/* Products */}
      {!loading && !error && (
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {paginatedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onEdit={(product) => {
                setEditingProduct(product);
                setIsModalOpen(true);
              }}
              onDelete={handleDeleteProduct}
            />
          ))}

        </div>
      )}

      {/* No Products */}
      {!loading && !error && filteredProducts.length === 0 && (
        <p className="py-10 text-center text-[#718292]">
          No products found.
        </p>
      )}

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProduct(null);
        }}
        onSave={handleSaveProduct}
        product={editingProduct}
      />

      <ConfirmModal
  isOpen={showDeleteModal}
  onClose={() => {
    setShowDeleteModal(false);
    setProductToDelete(null);
  }}
  onConfirm={() => {
    dispatch(deleteProduct(productToDelete));
    setShowDeleteModal(false);
    setProductToDelete(null);
  }}
  title="Delete Product"
  message="Are you sure you want to delete this product? This action cannot be undone."
  confirmText="Delete"
  type="danger"
/>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">

          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="rounded-lg border border-[#DCEBF2] bg-white px-4 py-2 text-sm font-medium text-[#617482] transition hover:bg-[#EAF5F9] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`h-9 w-9 rounded-lg text-sm font-medium transition ${
                currentPage === index + 1
                  ? "bg-[#18232C] text-white"
                  : "border border-[#DCEBF2] bg-white text-[#617482] hover:bg-[#EAF5F9]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-[#DCEBF2] bg-white px-4 py-2 text-sm font-medium text-[#617482] transition hover:bg-[#EAF5F9] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
          </button>

        </div>
      )}

    </div>
  );
};

export default Dashboard;