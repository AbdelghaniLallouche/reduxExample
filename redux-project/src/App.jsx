import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/countSlice";

function App() {
  const {count} = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
   dispatch(increment())
  }
  const handleDecrement = () =>{
    dispatch(decrement())
  }
  const handleIncrementByValue = (val) =>{
    dispatch(incrementByAmount(val))
  }

  return <div style={{
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  }}>
    <h1>Welcome to Redux</h1>
    <p>{count}</p>
    <div style={{
      display: 'flex',
      gap: '1rem',
    }}
    >
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={()=>{handleIncrementByValue(4)}}>increment by 4</button>
    </div>
  </div>;
}

export default App;
