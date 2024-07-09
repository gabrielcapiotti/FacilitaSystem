import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center; // Centraliza verticalmente
  justify-content:space-around; // Centraliza horizontalmente se tiver um item só ou distribui espaço igualmente se tiver múltiplos itens
  padding: 10px 0; // Adiciona um pouco de padding verticalmente
`;
export default FooterStyled;