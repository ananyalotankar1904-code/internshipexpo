import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/client';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await api.post('/admin/login', { username, password });

      if (response.status === 200) {
        localStorage.setItem('adminToken', response.data.token);
        navigate('/admin');
      } else {
        setError(response.data?.error || 'Invalid credentials');
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data?.error || 'Invalid credentials');
      } else {
        setError('Failed to connect to the server');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center font-body-md text-on-surface">
      <div className="bg-surface-container p-8 rounded-2xl shadow-[4px_4px_0px_#1b1c1c] max-w-md w-full border border-outline-variant">
        <div className="text-center mb-8">
          <h1 className="font-display-sm text-display-sm mb-2 text-on-surface">Admin Login</h1>
          <p className="text-on-surface-variant font-body-md">Enter your credentials to access the dashboard</p>
        </div>

        {error && (
          <div className="bg-error-container text-on-error-container p-4 rounded-xl mb-6 font-body-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-label-md font-label-md mb-2 text-on-surface" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-label-md font-label-md mb-2 text-on-surface" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-surface-container-high border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-primary text-on-primary rounded-xl font-label-lg text-label-lg shadow-[2px_2px_0px_#1b1c1c] hover:bg-primary/90 active:translate-y-0.5 active:translate-x-0.5 active:shadow-[0px_0px_0px_#1b1c1c] transition-all disabled:opacity-70"
          >
            {loading ? 'Authenticating...' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-primary hover:underline font-label-md text-label-md"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
