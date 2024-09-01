import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://copilot5.p.rapidapi.com/copilot';
      const options = {
        method: 'POST',
        headers: {
          'x-rapidapi-key': 'a00d06bce3msh79d26aeeba7737dp1feba0jsnb65556a727e5',
          'x-rapidapi-host': 'copilot5.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Hello',
          conversation_id: null,
          tone: 'BALANCED',
          markdown: false,
          photo_url: null
        })
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Response Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
