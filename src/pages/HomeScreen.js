import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PokemonCard from '../components/PokemonCard';

const HomeStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
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
        <HomeStyled>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} id={pokemon.id} type={pokemon.types[0].type.name} name={pokemon.name} />
            ))}
            <button onClick={handleMorePokes}>Add</button>
        </HomeStyled>
    );
};

export default HomeScreen;
