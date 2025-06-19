import React from 'react';
import AuthPage from '../components/Auth/AuthPage'; // Ensure the file exists at 'src/components/AuthPage.tsx' or update the path
import { useLocation } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  const handleAuthSuccess = () => {
    console.log('Authentication successful!');
  };

  return (
    <div className="min-h-screen bg-primary-dark text-white flex items-center justify-center">
      <AuthPage onAuthSuccess={handleAuthSuccess} isLogin={isLogin} />
    </div>
  );
};

export default LoginPage;