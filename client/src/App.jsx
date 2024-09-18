// src/App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [dataUsers, setDataUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://backend:3007/data-users'); // ใช้ proxy สำหรับเรียก API
        setDataUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Data Users</h1>
      <ul>
        {dataUsers.map(user => (
          <li key={user.UUID}>
            <strong>Username:</strong> {user.Username} <br />
            <strong>Nickname:</strong> {user.Nickname}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
