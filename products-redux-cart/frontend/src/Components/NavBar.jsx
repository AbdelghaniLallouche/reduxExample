import { Link } from "react-router-dom";
import { useSelector  , useDispatch} from "react-redux";
import { logoutuser } from "../redux/UserSlice";

const shopSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="white"
    class="w-6 h-6"
  >
    <path
      fill-rule="evenodd"
      d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z"
      clip-rule="evenodd"
    />
  </svg>
);
const NavBar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between p-3 bg-black">
      <Link to="/" className="no-underline">
        <h1 className="text-white font-bold text-xl">OnlineShop</h1>
      </Link>
      <Link to="/cart" className="no-underline">
        <div className="flex justify-start items-center gap-2">
          {shopSvg()}
          <p className="text-black font-bold px-2 pb-1 rounded-full bg-yellow-300">
            {totalQuantity}
          </p>
        </div>
      </Link>

      {user._id !== "" ? (
        <button className="text-white text-xl hover:cursor-pointer font-bold" onClick={()=>{
          dispatch(logoutuser())
        }}>
          logout
        </button>
      ) : (
        <div className="flex justify-start items-center gap-5">
          <Link className="no-underline" to="/login">
            <h1 className="font-bold text-white text-lg">Login</h1>
          </Link>
          <Link className="no-underline" to="/register">
            <h1 className="font-bold text-white text-lg">Register</h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
