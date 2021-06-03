import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-border-box;
   outline: 0;
 }
 body { 
   width: 100%;
   max-width: 1200px;
   background: #fff;
   color: #fff;
   -webkit-font-smoothing: antialiased;

 }
 body, input, button {
   font-family: 'Roboto' sans-serif;
   font-size: 14px;
 }
 h1, h2, h3, h4, h5, h6, strong {
   font-weight: 500;
   color: #fff;
 }
 button {
   cursor: pointer;
   color: #fff;
   background: #993399;
 }
 Table th td {
	border-bottom: .1rem solid #e1e1e1;
	border-bottom: .1rem solid $color-quinary;
	padding: 1.2rem 1.5rem;
	text-align: left
   ;
 }
`;
