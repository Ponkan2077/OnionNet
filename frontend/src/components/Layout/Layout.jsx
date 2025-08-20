import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';

const Layout = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleSidebar = () => setIsOpen(!isOpen)

    return (
        <div className="container-fluid">
            <div className="row">
                <div 
                    className={`col-8 col-md-4 vh-100 d-md-block bg-black text-white px-md-1 py-md-2 ${isOpen ? "d-block" : "d-none"}`}
                    style={{ maxWidth: '290px'}}
                >
                    {/* Sidebar for Desktop */}
                    <Sidebar isOpen={true} toggleSidebar={toggleSidebar}/>

                </div>
                <div className="col-md-8">
                    <Navbar toggleSidebar={toggleSidebar}/>
                    <MainContent />
                </div>
            </div>
        </div>
    )
}

export default Layout;
