import React, { useState } from 'react';

function FetchConfig() {
    const [configId, setConfigId] = useState('');
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setData(null);
        try {
            const response = await fetch(`http://localhost:8080/api/configurations/${configId}`);
            if (!response.ok) {
                throw new Error('Configuration not found');
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h2>Fetch Config</h2>
            <form onSubmit={handleSubmit}>
                <label>Config To Load (configId): </label>
                <input type="text" value={configId} onChange={(e) => setConfigId(e.target.value)} />
                <button type="submit">Submit</button>
            </form>

            {data && (
                <div>
                    <h3>Result:</h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default FetchConfig;
