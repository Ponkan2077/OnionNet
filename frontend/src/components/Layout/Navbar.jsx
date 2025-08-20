import React from 'react';
import { AlignLeft } from 'lucide-react';


const Navbar = ({toggleSidebar}) => {
    return (
        <>  
            <AlignLeft className="inline-block w-4 h-4 mr-2" onClick={toggleSidebar}/>
            <p>I am the NavBar</p>
        </>
    );
}

export default Navbar;