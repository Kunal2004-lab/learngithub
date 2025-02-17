import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, id, role };
    axios.post('http://localhost:8081/users/', payload)
      .then((res) => {
        console.log(res);
        navigate('/');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          ID:
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <label>
          Role:
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <br />
        <button>
          <Link to="/">Back to Home</Link>
        </button>
      </form>
    </div>
  );
};

export default Create;
