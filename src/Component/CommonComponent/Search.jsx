import { Search as SearchIcon } from "lucide-react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="relative w-full">
      <SearchIcon
        size={18}
        strokeWidth={2}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 pl-10 text-sm text-gray-700 outline-none transition focus:border-[#4056b5] focus:ring-2 focus:ring-[#4056b5]/10"
      />
    </div>
  );
};

export default Search;