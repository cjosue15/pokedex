import { useState } from 'react';

const useFetchPokemonSearch = () => {
    const [value, setValue] = useState('');
    const [pokemon, setPokemon] = useState();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchPokemon = async (pokemon) => {
        setLoading(true);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            const data = await response.json();
            setPokemon(data);
            setLoading(false);
            setError(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    };

    return { pokemon, error, loading, value, setValue, fetchPokemon };
};

export default useFetchPokemonSearch;
