
import React from 'react';
import { RegisterForm } from '../components/auth/RegisterForm';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (data: any) => {
    // Simulate successful registration
    console.log('Registration data:', data);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">UEAB</h1>
          <p className="text-lg text-gray-600">University of Eastern Africa, Baraton</p>
          <p className="text-sm text-gray-500">Parent Portal</p>
        </div>
        <RegisterForm onRegister={handleRegister} />
      </div>
    </div>
  );
};

export default Register;
