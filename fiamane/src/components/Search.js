function Pages({ getData, setQuery }) {
  const handleChange = (e) => setQuery(e.target.value);

  return (
    <div className="flex mt-12 ml-12">
      <input
        type="text"
        name="photo"
        onChange={handleChange}
        className="block px-4 mb-1 text-sm font-medium text-gray-900 border-2 rounded-md"
        placeholder="Search for photos..."
      />
      <button
        onClick={getData}
        className="flex px-4 py-1 mr-4 font-bold text-white border-2 rounded-md bg-blue-900 hover:text-blue-900 hover:bg-white border-blue-900"
      >
        Search
      </button>
    </div>
  );
}

export default Pages;
