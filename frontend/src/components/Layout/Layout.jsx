import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';

const Layout = ({children}) => {

    // Mobile Sidebar
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleSidebar = () => setIsOpen(!isOpen)

    // Desktop Icons Only
    const [isIconsOnly, setIsIconsOnly] = useState(false);

    const toggleIconsOnly = () => setIsIconsOnly(!isIconsOnly);
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div 
                    className={`vh-100 d-md-block bg-black text-white px-md-1 py-md-2 
                    ${isOpen ? "d-block z-1 position-absolute" : "d-none"} 
                    ${isIconsOnly ? "col-md-1 iconsOnly" : "col-md-4"}`}
                    style = {{ maxWidth : isIconsOnly ? "90px" : "290px"}}
                >
                    <Sidebar 
                        isOpen={isOpen} toggleSidebar={toggleSidebar} 
                        isIconsOnly={isIconsOnly} toggleIconsOnly={toggleIconsOnly}
                    />

                </div>
                <div 
                    className={`col-12 d-flex flex-column vh-100 
                    ${isOpen ? "bg-dark bg-opacity-50": ""} 
                    ${isIconsOnly ? "col-md-11" : "col-md-8"}`}
                >
                    <Navbar toggleSidebar={toggleSidebar} toggleIconsOnly={toggleIconsOnly} />
                    <MainContent />
                </div>
            </div>
        </div>
    )
}

export default Layout;
