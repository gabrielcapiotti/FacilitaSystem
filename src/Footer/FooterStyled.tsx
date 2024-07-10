import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center; 
  justify-content:space-around; 
  padding: 10px 0; 
`;
export default FooterStyled;