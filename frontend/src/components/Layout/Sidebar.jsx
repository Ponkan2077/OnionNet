import React from 'react';
import { NavLink } from 'react-router-dom';
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
import { X } from 'lucide-react';


const Sidebar = ({toggleSidebar}) => {
    
    return (
        <>  
            <div className='position-relative'>
                <span className="fw-bold fs-1 ms-md-3 ms-1" > LOGO </span>
                < X className="position-absolute top-0 end-0 ms-md-3 ms-1 mt-2 d-md-none " onClick={toggleSidebar} />
                <nav className="sidebar ms-md-3 ms-1">
                    <span className='mt-4'>Menu</span>
                    <ul className='ms-md-2 p-md-2 ms-1 p-1'>
                        <li>
                            <NavLink to="/Dashboard"className='fs-6'><LayoutDashboard className="inline-block align-text-bottom me-md-2 me-1" style={{ width: "1.4em", height: "1.4em" }}  /> Dashboard </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Device_Management" className='fs-6' ><Cpu className="inline-block align-text-bottom me-md-2 me-1" style={{ width: "1.4em", height: "1.4em" }} /> Device Management</NavLink>
                        </li>
                        <li>
                            <NavLink to="/DataHistory_And_Report" className='fs-6'><DatabaseBackup className="inline-block align-text-bottom me-md-2 me-1" style={{ width: "1.4em", height: "1.4em" }}  />Data History & Report</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Alerts_And_Notifications" className='fs-6'><Bell className="inline-block align-text-bottom me-md-2 me-1" style={{ width: "1.4em", height: "1.4em" }}  />Alerts & Notifications</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Weather" className='fs-6' ><Cloudy className="inline-block align-text-bottom me-md-2 me-1" style={{ width: "1.4em", height: "1.4em" }}  />Weather</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Settings"className='fs-6' ><Settings2 className="inline-block align-text-bottom me-md-2 me-1" style={{ width: "1.4em", height: "1.4em" }}  />Settings</NavLink>
                        </li>
                        <li>
                            <NavLink to="/OnionHealth" className='fs-6'><Sprout className="inline-block align-text-bottom me-md-2 me-1" style={{ width: "1.4em", height: "1.4em" }}  />Onion Health</NavLink>
                        </li>
                    </ul>
                    <span className='mt-5'>Others</span>
                    <ul className='ms-md-2 p-md-2 ms-1 p-1'>
                        <li>
                            <NavLink to="/UserManagement" className='fs-6' ><User className="inline-block align-text-bottom me-md-2 me-1" style={{ width: "1.4em", height: "1.4em" }}  />User Management </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Sidebar;