import React from 'react';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import axiosInstance from '../../utils/axiosInstance'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';

interface AuthPageProps {
  onAuthSuccess: () => void;
  isLogin: boolean; // Pass whether it's Login or Signup from the parent
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess, isLogin }) => {
  const navigate = useNavigate();
  const [authData, setAuthData] = React.useState<{ email: string; password: string } | null>(null);
  const [error, setError] = React.useState('');

  const handleSignupSuccess = async (data: { email: string; password: string }) => {
    try {
      const response = await axiosInstance.post('/api/signup', data);
      setAuthData(data);
      navigate('/login'); // Redirect to Login after successful signup
      setError('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  const handleLoginSuccess = async (data: { email: string; password: string }) => {
    try {
      const response = await axiosInstance.post('/api/login', data);
      onAuthSuccess();
      setError('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <div className="holographic-panel p-8 rounded-lg"> {/* Changed to rounded-lg for square corners */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md bg-gray-800 p-1"> {/* Updated background color */}
              <button
                onClick={() => navigate('/login')}
                className={`px-6 py-2 rounded-sm transition-all duration-300 ${ /* Changed to rounded-sm for square corners */
                  isLogin ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' : 'text-gray-300 hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => navigate('/signup')}
                className={`px-6 py-2 rounded-sm transition-all duration-300 ${ /* Changed to rounded-sm for square corners */
                  !isLogin ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' : 'text-gray-300 hover:text-white'
                }`}
              >
                Signup
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-4 text-red-400 text-sm bg-red-900/30 px-4 py-2 rounded-lg border border-red-900/50">
              {error}
            </div>
          )}

          <div className="quiz-container">
            {isLogin ? (
              <Login onLoginSuccess={handleLoginSuccess} prefilledData={authData} />
            ) : (
              <Signup onSignupSuccess={handleSignupSuccess} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;