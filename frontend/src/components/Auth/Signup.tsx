import React, { useState } from 'react';

interface SignupProps {
  onSignupSuccess: (data: { email: string; password: string }) => Promise<void>;
}

const Signup: React.FC<SignupProps> = ({ onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }
    
    try {
      await onSignupSuccess({ email, password });
    } catch (err) {
      setError((err instanceof Error ? err.message : 'Signup failed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          required
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          required
        />
      </div>
      
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          required
        />
      </div>
      
      {error && (
        <div className="text-red-400 text-sm bg-red-900/30 px-4 py-2 rounded-lg border border-red-900/50">
          {error}
        </div>
      )}
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-holographic flex items-center justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Creating account...
          </>
        ) : 'Sign Up'}
      </button>
      
      <div className="text-center text-sm text-gray-400">
        Already have an account?{' '}
        <button 
          type="button" 
          onClick={() => window.location.hash = '#login'}
          className="text-purple-500 hover:text-purple-400 font-medium"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Signup;