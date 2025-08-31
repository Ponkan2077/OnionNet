import React from 'react';

import { useState } from 'react'
import SensorCRUD from '../components/Sensor/SensorCrud';

const Device_Management = () => {
    const [refresh, setRefresh] = useState(false);

    const reload = () => setRefresh(!refresh); // For refresh after adding a sensor
    return (
        <div>
            <h1>I am the Device Management</h1>
            <SensorCRUD key={refresh} reload={reload} />
        </div>

    )
}

export default Device_Management;