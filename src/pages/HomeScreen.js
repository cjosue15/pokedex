import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PokemonCard from '../components/PokemonCard';

const HomeStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
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
        background-color: rgb(208, 200, 239);
        border: 1px solid rgb(124, 83, 140);
        box-shadow: rgb(124, 83, 140) 1px 4px 5px 0px;
        text-decoration: none;
        margin-top: 50px;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
`;

const HomeScreen = () => {
    const [counterStart, setcounterStart] = useState(1);
    const [counterEnd, setCounterEnd] = useState(9);
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async (start, end) => {
        for (let i = start; i <= end; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();
            setPokemons((pokes) => [...pokes, data]);
        }
    };

    const handleMorePokes = () => {
        setcounterStart(counterStart + 9);
        setCounterEnd(counterEnd + 9);
    };

    useEffect(() => {
        fetchPokemons(counterStart, counterEnd);
    }, [counterStart, counterEnd]);

    return (
        <>
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
        </>
    );
};

export default HomeScreen;
