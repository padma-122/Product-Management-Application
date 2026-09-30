const Filter = ({ category, setCategory, categories }) => {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}
      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none sm:w-52">
      <option value="all">All Categories</option>

      {categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Filter;