import {
  Sparkles,
  SprayCan,
  Sofa,
  ShoppingBasket,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Beauty",
      value: "beauty",
      icon: Sparkles,
    },
    {
      name: "Fragrances",
      value: "fragrances",
      icon: SprayCan,
    },
    {
      name: "Furniture",
      value: "furniture",
      icon: Sofa,
    },
    {
      name: "Groceries",
      value: "groceries",
      icon: ShoppingBasket,
    },
  ];

  return (
    <aside className="w-16 shrink-0 bg-[#eff4f6] md:w-60">
      <div className="hidden border-b border-[#E2EFF4] px-5 py-5 md:block">
        <h2 className="text-2xl font-semibold tracking-tight text-[#172B3A]">
          Modules
        </h2>

        <p className="mt-1 text-sm text-[#718292]">
          Product categories
        </p>
      </div>
      <div className="px-2 py-4 md:px-3">

        <p className="mb-3 hidden px-3 text-xs font-medium uppercase tracking-wider text-[#8A9AA6] md:block">
          Categories
        </p>

        <div className="space-y-2">

          {/* All Products */}
          <button
            onClick={() => navigate("/dashboard")}
            title="All Products"
            className="group flex w-full items-center justify-center gap-3 rounded-lg px-3 py-3 text-sm text-[#617482] transition hover:bg-[#EAF5F9] hover:text-[#172B3A] md:justify-start"
          >
            <span className=""></span>

            <span className="hidden md:inline">
              All Products
            </span>
          </button>

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                onClick={() => navigate(`/category/${category.value}`)}
                title={category.name}
                className="group flex w-full items-center justify-center gap-3 rounded-lg px-3 py-3 text-sm text-[#617482] transition hover:bg-[#EAF5F9] hover:text-[#172B3A] md:justify-start"
              >
                <Icon
                  size={20}
                  strokeWidth={1.8}
                  className="shrink-0 text-[#8A9AA6] transition-colors group-hover:text-[#172B3A]"
                />

                <span className="hidden md:inline">
                  {category.name}
                </span>
              </button>
            );
          })}

        </div>
      </div>
    </aside>
  );
};

export default Sidebar;