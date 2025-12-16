import React from 'react';
import { AlignLeft, X } from 'lucide-react';


const Navbar = ({toggleSidebar, toggleIconsOnly, isOpen, isIconsOnly}) => {
    return (
        <>  
            {/* Mobile Burger Menu */}
            {isOpen ? (
                <X className="inline-block mr-2 w-4 h-4 cursor-pointer d-md-none" onClick={toggleSidebar} />
            ) : (
                <AlignLeft className="inline-block mr-2 w-4 h-4 cursor-pointer d-md-none" onClick={toggleSidebar} />
            )}

            {/* Desktop Burger Menu*/}
            {isIconsOnly ? (
                <AlignLeft className="d-md-block inline-block mr-2 w-4 h-4 cursor-pointer d-none" onClick={toggleIconsOnly} />
            ) : (
                <X className="d-md-block inline-block mr-2 w-4 h-4 cursor-pointer d-none" onClick={toggleIconsOnly} />
            )}

            <p></p>
        </>
    );
}

export default Navbar;