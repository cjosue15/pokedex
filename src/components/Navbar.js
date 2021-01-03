import React from 'react';
import ContainerStyled from './ContainerStyled';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';
import loupe from '../assets/images/loupe.svg';

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

            h1 {
                font-size: 30px;
                margin: 0px 0px 0px 20px;
                display: none;

                @media screen and (min-width: 550px) {
                    display: block;
                }
            }
        }
    }
`;

const FormStyled = styled.form`
    margin-left: 20px;
    input {
        font-family: inherit;
        display: block;
        width: 100%;
        padding: 10px 30px 10px 20px;
        font-size: 1rem;
        color: #495057;
        background-color: #fff;
        border: 1px solid #ced4da;
        border-radius: 20px;
        box-sizing: border-box;
        background-image: url(${loupe});
        background-position: 93% 50%;
        background-repeat: no-repeat;
        background-size: 20px;

        &:focus {
            outline: none;
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
                    <FormStyled>
                        <input type='text' placeholder='Search your pokemons' />
                    </FormStyled>
                </div>
            </ContainerStyled>
        </NavStyled>
    );
};

export default Navbar;
