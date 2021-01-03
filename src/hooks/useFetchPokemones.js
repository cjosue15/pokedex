import { useEffect, useState } from 'react';
import { getIdUrl } from '../helpers/getIdUrl';

const ENDPOINT = `https://pokeapi.co/api/v2/`;

const useFetchPokemones = () => {
    const [counterStart, setcounterStart] = useState(1);
    const [counterEnd, setCounterEnd] = useState(9);
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(false);

    const fetchPokemons = async (start, end, type) => {
        setloading(true);

        try {
            if (start === 0 && end === 0) {
                const response = await fetch(`${ENDPOINT}type/${type.toLowerCase()}`);
                const data = await response.json();
                console.log(data.pokemon);
                const newData = data.pokemon.map(({ pokemon }) => ({
                    id: Number(getIdUrl(pokemon.url)),
                    name: pokemon.name,
                    type: type.toLowerCase(),
                }));
                setData(newData);
            } else {
                for (let i = start; i <= end; i++) {
                    const response = await fetch(`${ENDPOINT}pokemon/${i}`);
                    const json = await response.json();
                    const pokemon = {
                        id: json.id,
                        name: json.name,
                        type: json.types[0].type.name,
                    };
                    console.log(pokemon);
                    setData((pokes) => [...pokes, pokemon]);
                }
            }
            setloading(false);
            setError(false);
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

    return { data, loading, error, handleMorePokes, fetchPokemons };
};

export default useFetchPokemones;
