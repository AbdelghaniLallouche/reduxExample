import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { registerAuth } from "../redux/UserSlice"

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    const handleRegister = (e) => {
        e.preventDefault()
        dispatch(registerAuth({name, email, password}))    
    }

    return ( 
        <div className="flex flex-col justify-center items-center mt-10">
            <h1 className="text-black text-xl font-bold">Register</h1>
            <form method="post">
                <div className="flex flex-col gap-2">
                    <input type="text" value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} name="name" placeholder="Name" className="p-2 focus:outline-none rounded border-b-[1.5px]"/>
                    <input type="text" value={email} onChange={(e)=>{
                        setEmail(e.target.value)
                    }} name="email" placeholder="Email" className="p-2 focus:outline-none rounded border-b-[1.5px]"/>
                    <input type="password" value={password} onChange={(e)=>{
                        setPassword(e.target.value)
                    }} name="password" placeholder="Password" className="p-2 focus:outline-none rounded border-b-[1.5px]"/>
                    <button type="submit" className="p-2 bg-green-600 text-white font-semibold rounded"
                    onClick={handleRegister}
                    >Register</button>
                </div>
            </form>
            {user.registerstatus === "loading" && <p className="text-red-600 text-xl">Loading...</p>}
            {user.registerstatus === "success" && <p className="text-red-600 text-xl">Registered successfully</p>}
            {user.registerstatus === "failed" && <p className="text-red-600 text-xl">{user.registererror}</p>}

        </div>
     );
}
 
export default Register;