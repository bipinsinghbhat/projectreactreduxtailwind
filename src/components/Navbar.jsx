import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartData = useSelector((store) => store.cartReducer.cart);

  return (
    <nav className="bg-gray-800 text-white py-4 px-8 flex justify-between items-center flex-wrap">
      <div className="w-full md:w-1/4 md:pl-1 " >
        <Link to={"/"} className="hover:underline mr-4">
          logo
        </Link>
        <Link to={"/"} className="hover:underline">
          Pictures
        </Link>

      </div>

      <div className="w-full md:w-2/3 mt-2 md:mt-0 md:flex-grow md:flex md:justify-end">
        <div className="flex justify-end w-full md:w-auto md:pl-8 md:pr-8 ">
          <Link
            to={"/"}
            className="hover:underline inline-block mx-2 my-1 md:my-0"
          >
            Home
          </Link>
          <Link
            to={"/Cart"}
            className="hover:underline inline-block mx-2 my-1 md:my-0"
          >
            Cart ({cartData.length})
          </Link>
          <Link
            to={"/Checkout"}
            className="hover:underline inline-block mx-2 my-1 md:my-0"
          >
            Checkout
          </Link>
          <Link
            to={"/Profile"}
            className="hover:underline inline-block mx-2 my-1 md:my-0"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
