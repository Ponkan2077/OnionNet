import React, { useState, useEffect } from "react";
import { getSensors, createSensor, updateSensor, deleteSensor } from "../api";
import SensorForm from "./SensorForm";
import SensorList from "./SensorList";

function SensorCRUD() {
  const [sensors, setSensors] = useState([]);
  const [editingSensor, setEditingSensor] = useState(null);

  useEffect(() => {
    fetchSensors();
  }, []);

  const fetchSensors = async () => {
    try {
      const res = await getSensors();
      setSensors(res.data);
    } catch (err) {
      console.error("Error fetching sensors:", err);
    }
  };

  const handleSubmit = async (form) => {
    try {
      if (editingSensor) {
        await updateSensor(editingSensor.id, form);
        setEditingSensor(null);
      } else {
        await createSensor(form);
      }
      fetchSensors();
    } catch (err) {
      console.error("Error saving sensor:", err);
    }
  };

  const handleEdit = (sensor) => {
    setEditingSensor(sensor);
  };

  const handleDelete = async (id) => {
    try {
      await deleteSensor(id);
      fetchSensors();
    } catch (err) {
      console.error("Error deleting sensor:", err);
    }
  };

  return (
    <div>
      <h2>Sensor Management</h2>
      <SensorForm onSubmit={handleSubmit} editingSensor={editingSensor} />
      <SensorList sensors={sensors} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default SensorCRUD;
