import { createBrowserRouter } from 'react-router-dom';

// Components
import Layout from './components/Layout/Layout';

// Pages
import Dasboard from './pages/Dashboard';
import DeviceSensorManagement from './pages/Device_Management';
import DataHistoryReport from './pages/DataHistory_And_Report';
import AlertsNotifications from './pages/Alerts_And_Notifications';
import Weather from './pages/Weather';
import Settings from './pages/Settings';
import OnionHealth from './pages/OnionHealth';
import UserManagement from './pages/UserManagement';

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: 'Dashboard', element: <Dasboard />},
            {path: 'Device_Management', element: <DeviceSensorManagement />},
            {path: 'DataHistory_And_Report', element: <DataHistoryReport />},
            {path: 'Alerts_And_Notifications', element: <AlertsNotifications />},
            {path: 'Weather', element: <Weather />},
            {path: 'Settings', element: <Settings />},
            {path: 'OnionHealth', element: <OnionHealth />},
            {path: 'UserManagement', element: <UserManagement />},
        ]
    },

]);