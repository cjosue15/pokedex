import React from 'react';
import ContainerStyled from './ContainerStyled';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';
import Filter from './filter/Filter';
import { Link } from 'react-router-dom';

const NavStyled = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 90px;
    background: #fff;
    z-index: 1;
    display: flex;
    align-items: center;
    box-shadow: 0px -8px 14px 0px rgba(0, 0, 0, 0.25);

    .navbar-content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: #000;

            h1 {
                font-size: 28px;
                margin: 0px 0px 0px 20px;
                display: none;

                @media screen and (min-width: 550px) {
                    display: block;
                }
            }
        }
    }
`;

const Navbar = () => {
    return (
        <NavStyled>
            <ContainerStyled>
                <div className='navbar-content'>
                    <Link className='title' to='/'>
                        <img src={logo} alt='Logo' height='45' />
                        <h1>Pokedex</h1>
                    </Link>
                    <Filter />
                </div>
            </ContainerStyled>
        </NavStyled>
    );
};

export default Navbar;
