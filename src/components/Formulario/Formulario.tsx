import { Button, Form } from "react-bootstrap";
import styled from "styled-components";



const StyledForm = styled(Form)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px;
  margin-top: 60px;
  
`;
export default StyledForm;

export const FormGroup = styled(Form.Group)`
  margin-bottom: 10px;
`;

export const FormInput = styled(Form.Control)`
  width: 100%;  
`;

export const SubmitButton = styled(Button)`
  width: 100%;  
  background-color: #007bff; 
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;


export const FormSelect = styled(Form.Select)`
  display: block;
  width: 100%;  
`;

