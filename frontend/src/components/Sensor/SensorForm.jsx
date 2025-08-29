import React, { useState, useEffect } from "react";

const SensorForm = ({ onSubmit, editingSensor}) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        location: "",
        unit: "",
        status: "offline",
    });

    // When editing sensor changes, update form state
    useEffect(() => {
        if (editingSensor) {
            setForm(editingSensor);
        }
    }, [editingSensor]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name] : e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: "",
            type: "",
            location: "",
            unit: "",
            status: "offline",
        });
    };

    return (
    <form onSubmit={handleSubmit} className="sensor-form">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="type" value={form.type} onChange={handleChange} placeholder="Type" required />
      <input name="location" value={form.location} onChange={handleChange} placeholder="Location" required />
      <input name="unit" value={form.unit} onChange={handleChange} placeholder="Unit" required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="offline">Offline</option>
        <option value="online">Online</option>
      </select>
      <button type="submit">{editingSensor ? "Update" : "Add"} Sensor</button>
    </form>
  );

}

export default SensorForm;