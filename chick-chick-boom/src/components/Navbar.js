import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar({currentUser, setCurrentUser}) {

return (
    <header className="shadow-lg">
        <div  className="flex items-center justify-between space-around h-16 max-w-screen-xl px-4 mx-auto ">
            <ul className="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0">
                <li className="relative">
                    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <NavLink to="/">Home</NavLink>
                    </div>    
                </li>
                <li className="relative">
                    <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                        <NavLink to="/">Profile</NavLink>
                    </div>    
                </li>
            </ul>
        </div>
    </header>




 
)}




export default Navbar;