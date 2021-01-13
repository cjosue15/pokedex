import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonResult from '../components/PokemonResult';
import useFetchPokemonSearch from '../hooks/useFetchOnePokemon';

const DetailScreen = () => {
    const { id } = useParams();

    const { pokemon, error, loading, fetchPokemon } = useFetchPokemonSearch();

    useEffect(() => {
        if (!pokemon) fetchPokemon(id);
    }, [id, fetchPokemon, pokemon]);

    return (
        <>
            {loading && !error && <h1>Loadinf</h1>}
            {!loading && error && <h1>Error</h1>}
            {!loading && !error && pokemon && <PokemonResult pokemon={pokemon} page={'detail'} />}
        </>
    );
};

export default DetailScreen;
