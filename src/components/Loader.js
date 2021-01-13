import React from 'react';
import styled from 'styled-components';
import pokebola from '../assets/images/pokebola.png';

const LoaderStyled = styled.div`
    background-color: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    figure {
        margin: 0;
        width: 250px;
        animation-name: spin;
        animation-duration: 1500ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        img {
            max-width: 100%;
            vertical-align: bottom;
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Loader = () => {
    return (
        <LoaderStyled>
            <figure>
                <img src={pokebola} alt='Pokebola Loader' />
            </figure>
        </LoaderStyled>
    );
};

export default Loader;
