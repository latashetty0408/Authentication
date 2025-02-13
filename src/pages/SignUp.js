import React, { useState } from 'react'
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
import Loader from '../components/Loader/Loader';
import bcrypt from "bcryptjs";

const schema = z.object({
  firstName: z.string().min(1, 'First Name is required').regex(/^[A-Za-z]+$/, 'First Name should contain only alphabets'),
  lastName: z.string().min(1, 'Last Name is required').regex(/^[A-Za-z]+$/, 'Last Name should contain only alphabets'),
  mobileNumber: z.string().min(1, 'Mobile Number is required').refine((val) => /^\d{10}$/.test(val), { message: 'Mobile Number must be exactly 10 digits' })
  .refine((val) => /^[6-9]/.test(val), { message: 'Mobile Number must start with 6, 7, 8, or 9' }),
  email: z.string().min(1, 'Email is required').refine(value => /\S+@\S+\.\S+/.test(value), {
    message: 'Invalid email address',
  }),
  nationality: z.string().min(1, 'Nationality is required'),
  dateOfBirth: z.string().min(1, 'Date of Birth is required'),
  gender: z.string().min(1, 'Gender is required'),
  occupation: z.string().min(1, 'Occupation is required'),
  yearsOfExperience: z.string().min(1, 'Years of Experience is required'),
  website: z.union([z.string().url('Invalid URL'), z.literal('').optional()]).optional(),
  password: z.string().nonempty('Password is required').min(8, 'Password must be at least 8 characters long').max(20, 'Password must not exceed 20 characters').regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, 'Password must contain at least 1 uppercase letter, 1 number, and 1 special character'),
  confirmPassword: z.string().min(1, 'Confirm Password is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const [emailError, setEmailError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL
  // console.log('API URL:', apiUrl);
  const today = new Date().toISOString().split('T')[0];
  // console.log(today, 'today');

  const { nationalityOptions, occupationOptions, yearsOfExperienceOptions, genderOptions, setLoading, loading } = useApp();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    data.username = data.email;
    setLoading(true);
    try {
      const response = await axios.get(`${apiUrl}/users`);
      const user = response.data.find(user => user.email === data.email);
      if(user) {
        setLoading(false);
        setEmailError('email is already exist');
      } else {
        setEmailError('');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);
        const { confirmPassword, ...userData } = data; 
        await axios.post(`${apiUrl}/users`, {
          ...userData,
          password: hashedPassword,
          id: Date.now(),
        });
        console.log('User registered successfully');
        setTimeout(() => {
          setLoading(false);
          navigate('/login');
        }, 1500);
      }
    } catch (error) {
      setLoading(false);
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
          {loading ? <Loader /> : ( 
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <div className='flex justify-between gap-4'>
              <Input width="w-1/2" label="First Name" type="text" name="firstName" register={register} errors={errors} />
              <Input width="w-1/2" label="Last Name" type="text" name="lastName" register={register} errors={errors} />
            </div>
            <Input label="Mobile Number" type="text" name="mobileNumber" register={register} errors={errors} />
            <Input label="Email" type="email" name="email" register={register} errors={errors } />
            <Select label="Nationality" name="nationality" register={register} errors={errors} options={nationalityOptions} />
            <Input label="Date of Birth" type="date" max={today} name="dateOfBirth" register={register} errors={errors} />
            <Select label="Gender" name="gender" register={register} errors={errors} options={genderOptions} />
            <Select label="Occupation" name="occupation" register={register} errors={errors} options={occupationOptions} />
            <Select label="Years of Experience" name="yearsOfExperience" register={register} errors={errors} options={yearsOfExperienceOptions} />
            <Input label="Website (Optional)" type="url" name="website" register={register} errors={errors} />
            <Input label="Password" type="password" name="password" register={register} errors={errors} />
            <Input label="Re-enter password" type="password" name="confirmPassword" register={register} errors={errors} />
            {emailError && <p className="text-red-600 mb-4">{emailError}</p>}
            <Button type="submit">Create account</Button>
            <p className="text-sm text-gray-600 mt-2">
              By creating an account you agree to our{" "}
              <Link to={"#"} className="text-indigo-600 hover:underline font-semibold">
                 Terms & Policies
              </Link>
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Already have an account?
              <Link to={"/login"} className="text-indigo-600 hover:underline font-semibold">
                {" "}Log In
              </Link>
            </p>
          </form>
          )}
            

        </div>
      </div>
    </div>
  );
};
export default SignUp
