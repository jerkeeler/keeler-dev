import React from 'react';

const Button = ({ children, onClick, role = 'button' }) => (
  <button
    onClick={onClick}
    role={role}
    className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
  >
    {children}
  </button>
);

export default Button;
