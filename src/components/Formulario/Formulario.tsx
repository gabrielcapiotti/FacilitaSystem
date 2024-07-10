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

// Estilizando os grupos do formulário
export const FormGroup = styled(Form.Group)`
  margin-bottom: 10px;
`;

// Estilizando o input do formulário
export const FormInput = styled(Form.Control)`
  width: 100%;  // Ajuste conforme necessário
`;

// Estilizando o botão
export const SubmitButton = styled(Button)`
  width: 100%;  // Para ajustar ao contêiner
  background-color: #007bff; // Cor primária do Bootstrap
  border: none;
  &:hover {
    background-color: #0056b3;
  }
`;

// Estilizando o select do formulário
export const FormSelect = styled(Form.Select)`
  display: block;
  width: 100%;  // Ajusta ao contêiner
`;

