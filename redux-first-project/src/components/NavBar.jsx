const NavBar = ({name}) => {
    return ( 
        <div className="flex justify-between bg-red-500 p-3">
            <h1 className="font-bold text-white text-xl">CODERZ ACADEMY</h1>
            <p className="text-white">Hello {name}</p>
        </div>

     );
}
 
export default NavBar;