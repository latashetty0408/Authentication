import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Heading from '../UI/Heading';
import Select from '../UI/Select';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../assets/images/Index';
import { useApp } from '../Context/Context';

const schema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  mobileNumber: z.string().min(1, 'Mobile Number is required'),
  email: z.string().min(1, 'Email is required').refine(value => /\S+@\S+\.\S+/.test(value), {
    message: 'Invalid email address',
  }),
  nationality: z.string().min(1, 'Nationality is required'),
  dateOfBirth: z.string().min(1, 'Date of Birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  occupation: z.string().min(1, 'Occupation is required'),
  yearsOfExperience: z.string().min(1, 'Years of Experience is required'),
  website: z.union([z.string().url('Invalid URL'), z.literal('').optional()]).optional(),
  password: z.string().min(8, 'Password must be at least 8 characters long').max(20, 'Password must not exceed 20 characters').regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, 'Password must contain at least 1 uppercase letter, 1 number, and 1 special character'),
  confirmPassword: z.string().min(1, 'Confirm Password is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const apiUrl = process.env.REACT_APP_API_URL
  console.log('API URL:', apiUrl);
  const today = new Date().toISOString().split('T')[0];
  // console.log(today, 'today');

  const { nationalityOptions, occupationOptions, yearsOfExperienceOptions, genderOptions } = useApp();
  let lastId = 0;
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    data.username = data.email;
    lastId += 1;
    try {
      await axios.post(`${apiUrl}/users`, {
        ...data,
        id: lastId,
      });
      console.log('User registered successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden lg:block relative w-1/2 bg-cover bg-bottom min-h-screen bg-fixed" style={{ backgroundImage: `url(${Logo.Background})` }}>
        <div className="absolute inset-0 opacity-50"></div>
      </div>
      <div className="p-6 sm:p-12 w-full lg:w-1/2">
        <div className="w-full lg:max-w-md p-6">
          <Heading level={2}>Welcome to ABC</Heading>
          <p className="text-gray-600">Where Financial Wisdom Meets Technology</p>
          <Heading level={3} className="mt-6">Sign up</Heading>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className='flex justify-between gap-4'>
              <Input width="w-1/2" label="First Name" type="text" name="firstName" register={register} errors={errors} />
              <Input width="w-1/2" label="Last Name" type="text" name="lastName" register={register} errors={errors} />
            </div>
            <Input label="Mobile Number" type="text" name="mobileNumber" register={register} errors={errors} />
            <Input label="Email" type="email" name="email" register={register} errors={errors} />
            <Select label="Nationality" name="nationality" register={register} errors={errors} options={nationalityOptions} />
            <Input label="Date of Birth" type="date" max={today} name="dateOfBirth" register={register} errors={errors} />
            <Select label="Gender" name="gender" register={register} errors={errors} options={genderOptions} />
            <Select label="Occupation" name="occupation" register={register} errors={errors} options={occupationOptions} />
            <Select label="Years of Experience" name="yearsOfExperience" register={register} errors={errors} options={yearsOfExperienceOptions} />
            <Input label="Website (Optional)" type="url" name="website" register={register} errors={errors} />
            <Input label="Password" type="password" name="password" register={register} errors={errors} />
            <Input label="Re-enter password" type="password" name="confirmPassword" register={register} errors={errors} />
            <Button type="submit">Create account</Button>
            <p className="text-sm text-gray-600 mt-2">
              By creating an account you agree to our
              <Link to={"#"} className="text-indigo-600 hover:underline">
                Terms & Policies
              </Link>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Already have an account?
              <Link to={"/login"} className="text-indigo-600 hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp
