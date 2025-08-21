import React from 'react';
import { AlignLeft } from 'lucide-react';


const Navbar = ({toggleSidebar, toggleIconsOnly}) => {
    return (
        <>  
            {/* Mobile Burger Menu */}
            <AlignLeft className="inline-block w-4 h-4 mr-2 d-md-none" onClick={toggleSidebar}/>

            {/* Desktop Burger Menu*/}
            <AlignLeft className="inline-block w-4 h-4 mr-2 d-none d-md-block " onClick={toggleIconsOnly}/>

            <p>I am the NavBar</p>
        </>
    );
}

export default Navbar;