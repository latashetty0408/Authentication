import React from 'react';

const Select = ({ label, name, register, errors, options }) => {
  return (
    <div className="mb-4 relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        {...register(name)}
        className="mt-1 block w-full p-2 border rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="">Please select</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && <span className="text-red-600">{errors[name].message}</span>}
    </div>
  );
};

export default Select;