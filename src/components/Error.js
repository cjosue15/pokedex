import React from 'react';
import styled from 'styled-components';
import pokemonName from '../assets/images/pokemon.png';

const ErrorStyled = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    figure {
        margin: 0;
        width: 350px;

        img {
            max-width: 100%;
        }
    }
`;

const Error = ({ children }) => {
    console.log(children);
    return (
        <ErrorStyled>
            <figure>
                <img src={pokemonName} alt='Pokemon' />
            </figure>
            <h1>Ups there is an error, try again later.</h1>
            {children}
        </ErrorStyled>
    );
};

export default Error;
