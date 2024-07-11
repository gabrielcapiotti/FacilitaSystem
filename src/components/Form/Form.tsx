import { Form } from "react-bootstrap";
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




