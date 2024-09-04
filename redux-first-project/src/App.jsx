import { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./redux/userSlice";

function App() {
  const {name , email} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  return (
    <div>
      <NavBar name={name} />
      <div className="grid grid-cols-4">
        <div
          className="col-span-1 bg-slate-500 h-full" //style so it will take all the height
          style={{ height: "calc(100vh - 56px)" }} //style so it will take all the height
        >
          <SideBar name={name} />
        </div>
        <div className="col-span-3 mt-2">
          <form className="flex flex-col gap-2">
            <input
              id="name"
              className="input"
              type="text"
              required
              placeholder="name :"
            />
            <input
              id="email"
              className="input"
              type="text"
              required
              placeholder="email :"
            />
            <button
              className="mx-1 py-1 bg-red-500 text-white"
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  {
                    type: setName,
                    payload: document.getElementById("name").value,
                  },
                )
                dispatch({
                  type: setEmail,
                  payload: document.getElementById("email").value,
                })
              }}
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
