import { Row } from "react-bootstrap";
import styled from "styled-components";


// Ajuste para usar flexbox
const Conteudo = styled.main`
    display: flex;
    width: 100%;
    height: 341px;
    background-color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    color: #000000;
    justify-content: space-evenly;
    align-items: center;
`;

export default Conteudo;


export const StyledRow = styled(Row)`
  background-color: whitesmoke;
  width: 100%;
  height: 311px; // Defina a altura que desejar
  overflow-y: scroll; // Habilita a rolagem vertical se o conteúdo exceder a altura
  padding: 15px;
  margin: 0 auto; // Centraliza se necessário
`;