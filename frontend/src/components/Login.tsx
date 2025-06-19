import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Navigate to the home page on successful login
        navigate('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleLogin} className="content-container">
      <div className="mb-4">
        <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-dark-lighter text-white border border-dark-lightest focus:outline-none focus:border-accent"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-white font-semibold mb-2">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-dark-lighter text-white border border-dark-lightest focus:outline-none focus:border-accent"
          required
        />
      </div>
      <button type="submit" className="btn-primary">Login</button>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};

export default Login;