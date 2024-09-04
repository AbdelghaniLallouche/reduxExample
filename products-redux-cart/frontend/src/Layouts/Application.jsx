import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Application = () => {
    return ( 
        <div>
            <NavBar />
            <Outlet />
        </div>
     );
}
 
export default Application;