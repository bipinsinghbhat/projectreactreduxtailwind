import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import { addtocart } from "../redux/action";
import { useDispatch } from "react-redux";

const getdata = (url) => {
  return fetch(url).then((res) => res.json());
};

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch=useDispatch()

  const fetchProducts = async () => {
    try {
      let url = `https://json-example.onrender.com/products?_page=${page}&_limit=${limit}`;

      if (searchTerm.trim() !== '') {
        url += `&q=${searchTerm}`;
      }

      const res = await getdata(url);
      console.log("res",res)
      setData(res);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, limit, searchTerm]);

 

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setPage(1); // Reset to first page when performing a new search
  };

  const clearSearch = () => {
    setSearchTerm('');
    setPage(1); // Reset to first page when clearing the search
  };

  const handleAdd=(product)=>{
    dispatch(addtocart(product))
 }

  return (
<div className="bg-red-50">

    <div className="container  mx-auto max-w-7xl ">
   
      
   <div className="relative pt-4 mb-8">
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={handleSearch}
    className="border border-gray-300 rounded-full py-2 px-3 w-full md:w-1/2 focus:border-blue-500 focus:outline-none"
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
    <div
      key={product.id}
      className="relative group overflow-hidden transform transition-transform duration-300 hover:scale-105"
    >
      <img src={product.image} alt="" className="w-full h-auto object-cover" />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <h4 className="text-green-600 text-lg font-semibold">Rs {product.price}</h4>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <button
          onClick={() => handleAdd(product)}
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded"
        >
          Add To Cart
        </button>
        <Link
          to={`/${product.id}`}
          className="px-4 py-2 text-white bg-pink-500 hover:bg-pink-700 rounded"
        >
          Details
        </Link>
      </div>
    </div>
  ))}
</div>


      <Pagination page={page}  setPage={setPage}/>
    </div>



    </div>
  );
};

export default AllProduct;
