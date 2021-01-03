import React from 'react';
import styled from 'styled-components';
import ContainerStyled from '../components/ContainerStyled';
import PokemonCard from '../components/PokemonCard';
import useFetchPokemones from '../hooks/useFetchPokemones';

const HomeStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;

    @media screen and (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 991px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const ButtonContainerStyled = styled.div`
    text-align: center;

    button {
        border-radius: 15px;
        color: rgb(255, 255, 255);
        height: 32px;
        text-align: center;
        font-weight: bold;
        font-size: 15px;
        padding: 15px 30px 30px;
        background: rgb(208, 200, 239);
        border: 1px solid rgb(124, 83, 140);
        box-shadow: rgb(124, 83, 140) 1px 4px 5px 0px;
        text-decoration: none;
        margin-top: 50px;
        cursor: pointer;
        transition: background 0.2s ease-in-out;

        &:hover {
            background: rgb(157 144 208);
        }

        &:focus {
            outline: none;
        }
    }
`;

const HomeScreen = () => {
    const { data: pokemons, loading, error, handleMorePokes } = useFetchPokemones();

    if (error) {
        return <h1>Error</h1>;
    }

    if (loading) {
        return <h1 style={{ minHeight: '100vh', background: 'red' }}>Loading...</h1>;
    }

    return (
        <ContainerStyled home={'home'}>
            <HomeStyled>
                {pokemons.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        id={pokemon.id}
                        type={pokemon.types[0].type.name}
                        name={pokemon.name}
                    />
                ))}
            </HomeStyled>
            <ButtonContainerStyled>
                <button onClick={handleMorePokes}>Load more pokemons!</button>
            </ButtonContainerStyled>
        </ContainerStyled>
    );
};

export default HomeScreen;
