import React, { useState } from 'react';
import styled from 'styled-components';
import { PokedexContext } from './contex/PokedexContex';
import useFetchPokemones from './hooks/useFetchPokemones';
import PokedexRouter from './routes/PokedexRouter';

const WrapperStyled = styled.main`
    min-height: calc(100vh - 150px);
    margin-top: 150px;
    padding-bottom: 50px;
`;

const Pokedex = () => {
    const { data: pokemons, loading, error, handleMorePokes, fetchPokemons } = useFetchPokemones();
    const [typeSelected, setTypeSelected] = useState({ id: 0, name: 'Select' });

    const handleSelectType = ({ id, name }) => {
        setTypeSelected({ id, name });
        fetchPokemons(0, 0, name);
    };

    return (
        <PokedexContext.Provider value={{ pokemons, loading, error, handleMorePokes, typeSelected, handleSelectType }}>
            <WrapperStyled>
                <PokedexRouter />
            </WrapperStyled>
        </PokedexContext.Provider>
    );
};

export default Pokedex;
