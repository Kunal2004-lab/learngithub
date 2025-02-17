import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Edit = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const { userid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8081/users/${userid}`)
      .then((res) => {
        setName(res.data.name);
        setId(res.data.id);
        setRole(res.data.role);
      });
  }, [userid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name, id, role };
    axios.put(`http://localhost:8081/users/${userid}`, payload)
      .then(() => {
        console.log('Updated successfully');
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

export default Edit;
