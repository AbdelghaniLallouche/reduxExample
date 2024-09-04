const SideBar = ({name}) => {
    return ( 
        <div className="h-full">
            <ul className="list-none flex flex-col gap-4 justify-start items-center">
                <li><h1 className="sidebarh">Home</h1></li>
                <li><h1 className="sidebarh">about</h1></li>
                <li><h1 className="sidebarh">contact</h1></li>
                <li><h1 className="sidebarh">blog</h1></li>
                <li><h1 className="sidebarh">hello {name}</h1></li>
            </ul>
        </div>
     );
}
 
export default SideBar;