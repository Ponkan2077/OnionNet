import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

// CRUD functions for Sensors
export const GetSensors = () => API.get('/sensors/');
export const GetSensor = (id) => API.get(`/sensors/${id}/`);
export const CreateSensor = (data) => API.post('/sensors/', data);
export const UpdateSensor = (id, data) => API.put(`/sensors/${id}/`, data)
export const PatchSensor = (id, data) => API.patch(`/sensors/${id}/`, data)
export const DeleteSensor = (id) => API.delete(`/sensors/${id}/`);

// Get Sensor Fields
export const fetchSensorFields = () => API.get('/sensor-fields/');