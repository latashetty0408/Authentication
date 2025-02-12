import clsx from 'clsx';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const Input = ({ label, type, name, register, errors, width, max }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={clsx("mb-4 relative", width ? 'w-1/2' : 'w-full')}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        type={type === 'password' && showPassword ? 'text' : type}
        {...register(name)}
        max={type === 'date' ? max : undefined}
        className="mt-1 block w-full p-2 border rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
      {errors[name] && <span className="text-red-600">{errors[name].message}</span>}
      {type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer mt-8 h-5"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

export default Input;