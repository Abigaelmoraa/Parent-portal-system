
import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // Simulate successful login
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify({
      name: 'Abigael Moraa',
      email: email
    }));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">UEAB</h1>
          <p className="text-lg text-gray-600">University of Eastern Africa, Baraton</p>
          <p className="text-sm text-gray-500">Parent Portal</p>
        </div>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
