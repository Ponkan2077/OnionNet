import React, { useState, useEffect } from "react";
import { GetSensors, CreateSensor, UpdateSensor, DeleteSensor } from "../../api";
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
      const res = await GetSensors();
      setSensors(res.data);
    } catch (err) {
      console.error("Error fetching sensors:", err);
    }
  };

  const handleSubmit = async (form) => {
    try {
      if (editingSensor) {
        await UpdateSensor(editingSensor.id, form);
        setEditingSensor(null);
      } else {
        await CreateSensor(form);
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
      await DeleteSensor(id);
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
