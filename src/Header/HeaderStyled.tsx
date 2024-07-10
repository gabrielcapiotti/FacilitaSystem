import styled from "styled-components";

const HeaderStyled = styled.header`
    width: 100%;
    height: 70px;
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px 0px 0px 1px solid ${(props) => props.theme.colors.secondary};
    color: white;
    display: flex;
    align-items: center; 
    justify-content:center; 
    padding: 10px 0; 
    

`;
export default HeaderStyled;