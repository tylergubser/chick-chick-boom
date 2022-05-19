import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {

return (
    <header>
        <div>
            <div>
                <NavLink to="/">Home</NavLink>
            </div>    
        </div>
    </header>
)

}

export default Navbar;