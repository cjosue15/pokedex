import React from 'react';
import styled from 'styled-components';
import PokedexRouter from './routes/PokedexRouter';

const WrapperStyled = styled.main`
    min-height: calc(100vh - 150px);
    margin-top: 150px;
    padding-bottom: 50px;
`;

const Pokedex = () => {
    return (
        <WrapperStyled>
            <PokedexRouter />
        </WrapperStyled>
    );
};

export default Pokedex;
