import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { ButtomDefaultStyled } from './ButtomDefaultStyled';
import { Link } from 'react-router-dom';

interface ButtonDefaultProps {
    label: string;
    as?: any;
    href?: string;
    to?: string;
    onClick?: () => void;
}

const ConteudoBotao: React.FC<ButtonDefaultProps> = ({ label, as, href, to, onClick }) => {
    const Componente = to ? Link : as || 'button';
    const propsComponente = to ? { to } : href ? { href } : { onClick };

    return (
        <ButtomDefaultStyled as={Componente} {...propsComponente}>
            {label}
        </ButtomDefaultStyled>
    );
};

// Componente de Botão Dropdown com react-bootstrap
const DropdownButton = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Dropdown onMouseLeave={() => setShowDropdown(false)}>
            <ButtomDefaultStyled
                as={Dropdown.Toggle}
                onMouseEnter={() => setShowDropdown(true)}
                id="dropdown-custom-components"
            >
                Marcas
            </ButtomDefaultStyled>

            <Dropdown.Menu show={showDropdown} as="div">
                <Dropdown.Item as={Link} to="/bugatti" eventKey="1">Bugatti</Dropdown.Item>
                <Dropdown.Item as={Link} to="/ferrari" eventKey="2">Ferrari</Dropdown.Item>
                <Dropdown.Item as={Link} to="/koenigsegg" eventKey="3">Koenigsegg</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

// Exportações
export { ConteudoBotao, DropdownButton };  // Exportações nomeadas para esses componentes
