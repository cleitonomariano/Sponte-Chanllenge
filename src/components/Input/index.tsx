import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  // icon: React.ComponentType;
}

const Input: React.FC<InputProps> = props => <input {...props} />;

export default Input;
