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
