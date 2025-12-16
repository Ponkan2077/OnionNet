import React from 'react';
import { Outlet } from 'react-router-dom';
import IrrigationAnalytics from '../Charts/charts.jsx';  // <-- IMPORT

const MainContent = () => {
    return (
        <main className="flex-grow-1 overflow-auto">
            <Outlet />

            <IrrigationAnalytics />

        </main>
    );
}

export default MainContent;
