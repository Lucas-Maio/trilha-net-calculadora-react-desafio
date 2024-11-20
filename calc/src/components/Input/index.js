
// import { InputContainer } from "./styles";
// const Input = (value) => {
//     return (
//       <InputContainer>
//         <input disabled value={value} />
//       </InputContainer>
//     );
//   }
  
//   export default Input;
import React from 'react';
import { InputContainer } from './styles';

const Input = ({ value }) => {
  return <InputContainer>{value}</InputContainer>;
};

export default Input;
  