import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainContent from './MainContent';

const Layout = ({children}) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div 
                    className="col-md-3 vh-100 d-none d-md-block bg-black text-white px-1 py-2"
                    style={{ maxWidth: '290px', minWidth: '180px'}}
                >
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <Navbar />
                    <MainContent />
                </div>
            </div>
        </div>
    )
}

export default Layout;
