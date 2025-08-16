import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
// Icons
import { LayoutDashboard } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { DatabaseBackup } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Cloudy } from 'lucide-react';
import { Settings2 } from 'lucide-react';
import { Sprout } from 'lucide-react';
import { User } from 'lucide-react';


const Sidebar = () => {
    return (
        <> 
            <span className="fw-bold fs-1 ms-3" > LOGO </span>
            <nav className="sidebar">
                <span>Menu</span>
                <ul className='ms-2'>
                    <li>
                        <Link to="/Dashboard"className='fs-lg-6'><LayoutDashboard className="inline-block w-4 h-4 mr-2" /> Dashboard </Link>
                    </li>
                    <li>
                        <Link to="/Device_And_SensorManagement" className='fs-lg-6'><Cpu className="inline-block w-4 h-4 mr-2" />Device & Sensor Management</Link>
                    </li>
                    <li>
                        <Link to="/DataHistory_And_Report" className='fs-lg-6'><DatabaseBackup className="inline-block w-4 h-4 mr-2" />Data History & Report</Link>
                    </li>
                    <li>
                        <Link to="/Alerts_And_Notifications" className='fs-lg-6'><Bell className="inline-block w-4 h-4 mr-2" />Alerts & Notifications</Link>
                    </li>
                    <li>
                        <Link to="/Weather" className='fs-lg-6' ><Cloudy className="inline-block w-4 h-4 mr-2" />Weather</Link>
                    </li>
                    <li>
                        <Link to="/Settings"className='fs-lg-6' ><Settings2 className="inline-block w-4 h-4 mr-2" />Settings</Link>
                    </li>
                    <li>
                        <Link to="/OnionHealth" className='fs-lg-6'><Sprout className="inline-block w-4 h-4 mr-2" />Onion Health</Link>
                    </li>
                </ul>
                <span>Others</span>
                <ul className='ms-3'>
                    <li>
                        <Link to="/UserManagement" className='fs-lg-6' ><User className="inline-block w-4 h-4 mr-2" />User Management</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Sidebar;