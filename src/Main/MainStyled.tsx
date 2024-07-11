import { Row } from "react-bootstrap";
import styled from "styled-components";

const Content = styled.main`
    display: flex;
    width: 100%;
    height: 341px;
    background-color: ${(props) => props.theme.colors.secondary};
    text-align: center;
    color: #000000;
    justify-content: space-evenly;
    align-items: center;
`;

export default Content;

export const StyledRow = styled(Row)`
  background-color: whitesmoke;
  width: 100%;
  height: 311px; 
  overflow-y: scroll; 
  padding: 15px;
  margin: 0 auto; 
`;