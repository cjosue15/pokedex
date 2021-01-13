import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loader from '../components/Loader';
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
            {loading && !error && <Loader />}
            {!loading && error && <Error />}
            {!loading && !error && pokemon && <PokemonResult pokemon={pokemon} page={'detail'} />}
        </>
    );
};

export default DetailScreen;
