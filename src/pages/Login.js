import React, { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import Heading from '../UI/Heading';
import Input from '../UI/Input';
import Button from '../UI/Button';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../assets/images/Index';
import { useApp } from '../Context/Context';

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    sessionStorage.clear();
  }, []);


  const navigate = useNavigate();
  const { authError, setAuthError } = useApp()
  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:4000/users');
      const user = response.data.find(user => user.username === data.username && user.password === data.password);
      if (user) {
        console.log('Login successful');
        const {id, firstName, lastName, email} = user;
        sessionStorage.setItem('userData', JSON.stringify({id, firstName, lastName, email}));
        navigate('/dashboard')
      } else {
        setAuthError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setAuthError('An error occurred while logging in');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden lg:block relative w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${Logo.Background})` }}>
        <div className="absolute inset-0  opacity-50"></div>
      </div>
      <div className="p-6 sm:p-12 w-full lg:w-1/2">
        <div className="w-full max-w-md p-6">
          <Heading level={2}>Welcome to ABC</Heading>
          <p className="text-gray-600">Where Financial Wisdom Meets Technology</p>
          <Heading level={3} className="mt-24">Log in with your credentials</Heading>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <Input label="Username" type="text" name="username" register={register} errors={errors} />
            <Input label="Password" type="password" name="password" register={register} errors={errors} />
            <Button type="submit">Log in</Button>
            {authError && <p className="text-red-600">{authError}</p>}
            <Link to={"/"} className="block text-orange-500 hover:underline">Forgot Password?</Link>

            <p className="text-sm text-gray-600 mt-2">
              Don't have an account?
              <Link to={"/signup"} className="text-indigo-600 hover:underline">
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
