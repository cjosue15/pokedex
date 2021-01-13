import React from 'react';
import styled from 'styled-components';
import ContainerStyled from '../components/ContainerStyled';
import loupe from '../assets/images/loupe.svg';
import useFetchPokemonSearch from '../hooks/useFetchOnePokemon';
import { colors } from '../helpers/colors';
import PokemonResult from '../components/PokemonResult';

const SearchScreenStyled = styled.div`
    flex: auto;
    background-color: ${(props) => colors[props.type]};
    padding-top: 5em;
    display: flex;
    flex-direction: column;

    .content-search {
        text-align: center;
        margin-bottom: 80px;
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
`;

const SearchScreen = () => {
    const { pokemon, error, loading, value, setValue, fetchPokemon } = useFetchPokemonSearch();

    console.log(pokemon);

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchPokemon(value.toLowerCase());
    };

    return (
        <SearchScreenStyled type={pokemon?.types[0].type.name || '#f7f7ee'}>
            <ContainerStyled>
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
            </ContainerStyled>
            {loading && !error && 'loading'}
            {error && !loading && 'errror'}
            {!loading && pokemon && !error && <PokemonResult pokemon={pokemon} />}
        </SearchScreenStyled>
    );
};

export default SearchScreen;
