import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";



export const ButtomDefaultStyled = styled.button`
    background-color: #4b4b4b;
    color: white;
    margin: 15px;
    width: auto;
    font-size: 15px;
    border: 0px solid black;
    align-items: center;
    padding: 10px 20px;
    border-radius: 15px 15px 15px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${(props) => props.theme.colors.secondary};
        color: black;
    }
`;

// Estilo para a modal de opções
/*
const DropdownMenu = styled.div`
    position: absolute;
    background-color: white;
    color: black;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    display: none;
    flex-direction: column;
    width: 200px; // Você pode ajustar a largura conforme necessário

    & a {
        padding: 5px;
        text-decoration: none;
        color: black;

        &:hover {
            background-color: #f0f0f0;
        }
    }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
  }
`;
*/