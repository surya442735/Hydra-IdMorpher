import React, { useState } from "react";

function UpdateRemark() {
  const [configId, setConfigId] = useState("");
  const [remark, setRemark] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const response = await fetch(
        `http://localhost:8080/api/configurations/${configId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ remark: remark }),
        }
      );
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to update");
      }
      setMessage(result.message);
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div>
      <h2>Update Remark</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Config To Update (configId): </label>
          <input
            type="text"
            value={configId}
            onChange={(e) => setConfigId(e.target.value)}
          />
        </div>
        <div>
          <label>Remark: </label>
          <textarea
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateRemark;
