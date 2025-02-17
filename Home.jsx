import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/users')
      .then((res) => {
        setState(res.data);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/users/${id}`)
      .then(() => {
        setState((prevState) => prevState.filter((user) => user.id !== id));
      });
  };

  return (
    <div>
      <button>
        <Link to="/create">ADD</Link>
      </button>
      <table border="2px solid">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.id}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
                <button>
                  <Link to={`/edit/${user.id}`}>Edit</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
