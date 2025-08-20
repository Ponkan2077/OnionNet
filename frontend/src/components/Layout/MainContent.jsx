import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const MainContent = ({children}) => {
    return (
        <main className="flex-grow-1 overflow-auto" >
            <Outlet />
            <p>I am the Main Content Area</p>
        </main>
    );
}

export default MainContent;