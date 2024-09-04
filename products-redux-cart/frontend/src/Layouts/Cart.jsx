import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incrementquantinty , decrementquantity , clearcart } from "../redux/CartSlice"

const Cart = () => {
  const { cartitems,totalprice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  return (
    <div className="mx-4">
      <h1 className="text-center my-3">Shopping Cart</h1>
      <div className="grid grid-cols-7">
        <div className="col-span-3">
          <p>Products</p>
        </div>
        <div className="col-span-1">
          <p>Price</p>
        </div>
        <div className="col-span-2">
          <p>Quantity</p>
        </div>
        <div className="col-span-1">
          <p>Total</p>
        </div>
        </div>
        <br />
        <hr />
        <br />
        
        {cartitems.map((item) => (
        <>
          <div key={item.product.id} className="grid mb-4 grid-cols-7">
            <div className="col-span-3">
              <p>{item.product.name}</p>
            </div>
            <div className="col-span-1">
              <p>{`$${item.product.price}`}</p>
            </div>
            <div className="col-span-2 flex justify-start gap-2">
              <button onClick={()=>{
                dispatch(decrementquantity(item.product))
              }}>-</button>
              <p>{item.quantity}</p>
              <button onClick={()=>{
                dispatch(incrementquantinty(item.product))
              }}>+</button>
            </div>
            <div className="col-span-1">
              <p className="font-bold">{`$${item.product.price * item.quantity}`}</p>
            </div>
          </div>
          <br />
          <hr />
          <br />
          </>
        ))}
        <div className="flex items-center justify-between">
            <button 
            onClick={()=>{
                dispatch(clearcart())}}
            className="bg-red-600 text-white px-2 font-bold rounded">Clear cart</button>
            <div>
                <p>{`Total Price: $${totalprice}`}</p>
                <button className="bg-blue-600 w-full rounded text-white font-bold">Check-Out</button>
            </div>
        </div>

    </div>
  );
};

export default Cart;
