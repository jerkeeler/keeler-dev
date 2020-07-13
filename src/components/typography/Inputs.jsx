import React from 'react';

export const Input = ({ name, type, placeholder, required = false }) => (
  <input
    className="shadow md:w-64 border-solid border border-gray-300 rounded-lg
    p-2 focus:shadow-outline"
    type={type}
    name={name}
    placeholder={placeholder}
    required={required}
    minLength={2}
  />
);

export const Label = ({ name, children }) => (
  <label for={name} className="mb-2">
    {children}
  </label>
);

export const Select = ({ name, options, required = false }) => (
  <select
    name={name}
    className="shadow md:w-64 h-8 border-solid border border-gray-300 rounded
    p-2 focus:shadow-outline"
    required={required}
  >
    <option value="">---</option>
    {options.map((op) => (
      <option value={op} key={op}>
        {op}
      </option>
    ))}
  </select>
);

export const TextArea = ({ name, placeholder, required = false }) => (
  <textarea
    name={name}
    className="shadow border-solid border border-gray-300 rounded-lg p-2
    focus:shadow-outline max-w-2xl"
    rows={6}
    placeholder={placeholder}
    required={required}
    minLength={10}
  />
);

export const FormButton = ({ type = 'submit', children }) => (
  <button
    type={type}
    className="shadow bg-primary text-white rounded-lg w-24 p-2
    hover:bg-primary-lighter"
  >
    {children}
  </button>
);

export const FormGroup = ({ children }) => (
  <p className="flex flex-col mb-4 last:mb-0">{children}</p>
);
