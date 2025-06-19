import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user session data (e.g., tokens, localStorage, etc.)
    localStorage.removeItem('userToken'); // Adjust key based on your implementation
    localStorage.removeItem('userData'); // Optional: Clear additional user data

    // Redirect to the login page
    navigate('/login');
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl font-semibold text-white">Logging out...</p>
    </div>
  );
};

export default Logout;
