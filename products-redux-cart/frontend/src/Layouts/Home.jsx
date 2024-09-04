import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/ProductsSlice";
import { addtocart } from "../redux/CartSlice";
import { useEffect } from "react";

const Home = () => {
  const { products, status } = useSelector((state) => state.products);
  const { cartitems, totalQuantity, totalprice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div>
      {status === "loading" && <h1>Loading...</h1>}
      {status === "failed" && <h1>Failed to load products</h1>}
      {status === "success" && (
        <div>
          {products.map((product) => (
            <div
              key={product.id}
              className="p-2 flex justify-between items-center bg-slate-800 m-2 rounded"
            >
              <div>
                <h1 className="text-white font-bold">{product.name}</h1>
                <p className="text-white">{product.description}</p>
                <p className="text-white">${product.price}</p>
              </div>
              <button  
              onClick= {()=>{
                dispatch(addtocart(product));
              }}
              className="p-2 rounded bg-green-600 text-white font-semibold">
                add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
