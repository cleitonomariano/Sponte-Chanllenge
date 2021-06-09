import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { shade } from 'polished';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = styled.button`
  width: 25%;
  height: 30px;
  cursor: pointer;
  border: 1px solid #008396;
  background: #008396;
  color: #fff;
  border-radius: 5px;
  outline: none;
  transition: 0.5s;
  margin-top: 14px;
  margin-left: 5px;
  &:hover {
    background: ${shade(0.3, '#008396')};
  }
`;
export default Button;
