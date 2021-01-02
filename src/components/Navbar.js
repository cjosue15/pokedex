import React from 'react';
import ContainerStyled from './ContainerStyled';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';

const NavStyled = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 90px;
    background: #fff;
    z-index: 1;
    display: flex;
    align-items: center;

    .title {
        display: flex;
        align-items: center;

        h1 {
            font-size: 30px;
            margin: 0px 0px 0px 20px;
        }
    }
`;

const Navbar = () => {
    return (
        <NavStyled>
            <ContainerStyled>
                <div className='navbar-content'>
                    <div className='title'>
                        <img src={logo} alt='Logo' />
                        <h1>Pokedex</h1>
                    </div>
                </div>
            </ContainerStyled>
        </NavStyled>
    );
};

export default Navbar;
