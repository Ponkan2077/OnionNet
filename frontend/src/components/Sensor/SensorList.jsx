import React from "react";

const SensorList = ({ sensors, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Unit</th>
                    <th>Status</th>
                    <th>Added At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {sensors.map((sensor) => (
                    <tr key={sensor.id}>
                        <td>{sensor.id}</td>
                        <td>{sensor.name}</td>
                        <td>{sensor.type}</td>
                        <td>{sensor.location}</td>
                        <td>{sensor.unit}</td>
                        <td>{sensor.status}</td>
                        <td>{sensor.added_at}</td>
                        <td>
                            <button onClick={() => onEdit(sensor)}>Edit</button>
                            <button onClick={() => onDelete(sensor.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default SensorList;