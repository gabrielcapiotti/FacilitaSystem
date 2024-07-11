import React from 'react';
import { ButtomDefaultStyled } from './ButtomDefaultStyled';
import { Link } from 'react-router-dom';

interface ButtonDefaultProps {
    label: string;
    as?: any;
    href?: string;
    to?: string;
    onClick?: () => void;
}

const ButtomContent: React.FC<ButtonDefaultProps> = ({ label, as, href, to, onClick }) => {
    const Componente = to ? Link : as || 'button';
    const propsComponente = to ? { to } : href ? { href } : { onClick };

    return (
        <ButtomDefaultStyled as={Componente} {...propsComponente}>
            {label}
        </ButtomDefaultStyled>
    );
};

export { ButtomContent }; 
