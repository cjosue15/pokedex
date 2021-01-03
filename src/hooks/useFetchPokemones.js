import { useEffect, useState } from 'react';

const useFetchPokemones = () => {
    const [counterStart, setcounterStart] = useState(1);
    const [counterEnd, setCounterEnd] = useState(9);
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(false);

    const fetchPokemons = async (start, end) => {
        setloading(true);
        try {
            for (let i = start; i <= end; i++) {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                const pokemon = await response.json();
                setData((pokes) => [...pokes, pokemon]);
                setloading(false);
                setError(false);
            }
        } catch (error) {
            setloading(false);
            setError(true);
        }
    };

    const handleMorePokes = () => {
        setcounterStart(counterStart + 9);
        setCounterEnd(counterEnd + 9);
    };

    useEffect(() => {
        fetchPokemons(counterStart, counterEnd);
    }, [counterStart, counterEnd]);

    return { data, loading, error, handleMorePokes };
};

export default useFetchPokemones;
