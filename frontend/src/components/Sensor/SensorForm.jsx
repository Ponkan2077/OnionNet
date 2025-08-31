import React, { useEffect, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { fetchSensorFields } from "../../api";

const SensorForm = ({ onSubmit, editingSensor }) => {
  const { control, register, handleSubmit, reset } = useForm({
    defaultValues: { fields: [] }
  });

  const { fields, replace } = useFieldArray({
    control,
    name: "fields"
  });

  const [loading, setLoading] = useState(true);

  // Fetch fields from backend
  useEffect(() => {
    const loadFields = async () => {
      try {
        const res = await fetchSensorFields();
        const apiFields = res.data.map(field => ({
          ...field,
          value: editingSensor ? editingSensor[field.name] || "" : ""
        }));
        replace(apiFields); // inject into useFieldArray
      } catch (err) {
        console.error("Error fetching fields:", err);
      } finally {
        setLoading(false);
      }
    };
    loadFields();
  }, [editingSensor, replace]);

  const onSubmitHandler = (data) => {
    // transform data.fields [{name, value}] → {name: value}
    const payload = {};
    data.fields.forEach(f => {
      payload[f.name] = f.value;
    });
    console.log("🚀 Submitting payload:", payload);
    onSubmit(payload);
    reset({ fields: [] });
  };

  if (loading) return <p>Loading form...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="p-3 border rounded">
      {fields.map((field, index) => (
        <div key={field.id} className="mb-3">
          <label className="form-label">{field.label}</label>

          {/* Text / number input */}
          {field.type !== "select" && (
            <input
              type={field.type || "text"}
              className="form-control"
              {...register(`fields.${index}.value`, { required: field.required })}
              defaultValue={field.value}
            />
          )}

          {/* Select input */}
          {field.type === "select" && (
            <select
              className="form-select"
              {...register(`fields.${index}.value`, { required: field.required })}
              defaultValue={field.value}
            >
              {field.options?.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          )}

          {/* Hidden name so we know what field this is */}
          <input type="hidden" {...register(`fields.${index}.name`)} defaultValue={field.name} />
        </div>
      ))}

      <button type="submit" className="btn btn-primary">
        {editingSensor ? "Update Sensor" : "Add Sensor"}
      </button>
    </form>
  );
};

export default SensorForm;
