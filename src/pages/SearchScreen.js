import React from 'react';
import styled from 'styled-components';
import ContainerStyled from '../components/ContainerStyled';
import loupe from '../assets/images/loupe.svg';
import PokemonCard from '../components/PokemonCard';
import useFetchPokemonSearch from '../hooks/useFetchOnePokemon';

const SearchScreenStyled = styled.div`
    .content-search {
        text-align: center;
        input {
            font-family: inherit;
            display: inline-block;
            max-width: 500px;
            width: 100%;
            padding: 0 20px;
            height: 40px;
            line-height: 40px;
            font-size: 1rem;
            color: #75757e;
            background-color: #fff;
            border: 1px solid #ced4da;
            background-image: url(${loupe});
            background-position: 95% 50%;
            background-repeat: no-repeat;
            background-size: 18px;
            border-radius: 20px;

            &:focus {
                outline: none;
            }
        }
    }

    .content-result {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }
`;

const SearchScreen = () => {
    const { pokemon, error, loading, value, setValue, fetchPokemon } = useFetchPokemonSearch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchPokemon(value);
    };

    return (
        <ContainerStyled>
            <SearchScreenStyled>
                <div className='content-search'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            value={value}
                            placeholder='Search your pokemon!!!'
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </form>
                </div>
                <div className='content-result'>
                    {loading && !error && 'loading'}
                    {error && !loading && 'errror'}
                    {pokemon && !error && (
                        <PokemonCard id={pokemon.id} name={pokemon.name} type={pokemon.types[0].type.name} />
                    )}
                </div>
            </SearchScreenStyled>
        </ContainerStyled>
    );
};

export default SearchScreen;
