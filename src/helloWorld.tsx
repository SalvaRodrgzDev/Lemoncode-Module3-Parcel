import React from 'react';
import './mystyles.scss';
const logo = require('./content/logo_1.png');
import dotenv from "dotenv";

dotenv.config();

console.log(`Api base: ${process.env.API_BASE}`);

export const HelloWorld : React.FC = () => {
  
  return(
          <div>
            <img src={logo} />
            <h1>Hello World</h1>
          </div>
)};