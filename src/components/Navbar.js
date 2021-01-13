import React, { useState } from 'react';
import ContainerStyled from './ContainerStyled';
import logo from '../assets/images/logo.png';
import styled from 'styled-components';
import Filter from './filter/Filter';
import { Link } from 'react-router-dom';
import lupa from '../assets/images/lupa.svg';

const NavStyled = styled.nav`
    position: sticky;
    top: 0;
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

    .lupa-icon {
        width: 25px;
        display: none;
        cursor: pointer;
        img {
            max-width: 100%;
            vertical-align: bottom;
        }
    }

    @media only screen and (max-width: 600px) {
        .lupa-icon {
            display: block;
        }
    }
`;

const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <NavStyled>
            <ContainerStyled>
                <div className='navbar-content'>
                    <Link className='title' to='/'>
                        <img src={logo} alt='Logo' height='45' />
                        <h1>Pokedex</h1>
                    </Link>
                    <Filter isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
                    <i
                        className='lupa-icon'
                        onClick={(_) => {
                            setIsOpenMenu(!isOpenMenu);
                        }}
                    >
                        <img src={lupa} alt='Lupa' />
                    </i>
                </div>
            </ContainerStyled>
        </NavStyled>
    );
};

export default Navbar;
