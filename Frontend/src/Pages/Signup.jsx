import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', data);
      alert('Signup successful!');
      navigate('/'); // Redirect to login
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={e => setData({ ...data, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setData({ ...data, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setData({ ...data, password: e.target.value })} />
      <button type="submit">Signup</button>
      <p>Already have an account? <span onClick={() => navigate('/')} style={{ color: 'blue', cursor: 'pointer' }}>Login here</span></p>
    </form>
  );
}
