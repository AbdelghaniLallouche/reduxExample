import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { loginAuth } from "../redux/UserSlice"

const Login = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginAuth({email, password}))
    }
    return ( 
        <div className="flex flex-col mt-20 justify-center items-center">
            <h1 className="text-black font-bold text-xl">Login</h1>
            <form method="post">
                <div className="flex flex-col gap-2">
                    <input type="text" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} name="email" placeholder="Email" className="p-2 focus:outline-none rounded border-b-[1.5px]"/>
                    <input type="password" value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} name="password" placeholder="Password" className="p-2 border-b-[1.5px] focus:outline-none rounded"/>
                    <button type="submit" className="p-2 bg-green-600 text-white font-semibold rounded"
                    onClick={handleLogin}
                    >Login</button>
                </div>
            </form>
            {user.loginstatus === "loading" && <p className="text-red-600 text-xl">Loading...</p>}
            {user.loginstatus === "success" && <p className="text-red-600 text-xl">Logged in successfully</p>}
            {user.loginstatus === "failed" && <p className="text-red-600 text-xl">{user.loginerror}</p>}


        </div>
     );
}
 
export default Login;