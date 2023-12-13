import React, { useEffect, useState } from "react";

const getdata = (url) => {
  return fetch(url).then((res) => res.json());
};

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchProducts = async () => {
    try {
      let url = `https://json-example.onrender.com/products?_page=${page}&_limit=${limit}`;

      if (searchTerm.trim() !== '') {
        url += `&q=${searchTerm}`;
      }

      const res = await getdata(url);
      setData(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, limit, searchTerm]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1); // Reset to first page when performing a new search
  };

  const clearSearch = () => {
    setSearchTerm('');
    setPage(1); // Reset to first page when clearing the search
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-4">All Products</h1>
      
      <div className="relative mt-4 mb-8">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded py-2 px-3 w-full"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            &#x2715;
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data?.map((product) => (
          <div key={product.id} className="relative group">
            <img src={product.image} alt="" className="w-full h-auto object-cover" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <h4 className="text-green-600 text-lg font-semibold">Rs {product.price}</h4>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Add</button>
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Details</button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={handlePrevPage} disabled={page === 1} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Previous Page
        </button>
        <p className="py-2 px-4 bg-gray-300 text-gray-800 font-bold">{page}</p>
        <button onClick={handleNextPage} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
          Next Page
        </button>
      </div>
    </div>
  );
};

export default AllProduct;
