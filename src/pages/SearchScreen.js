import React, { useRef } from 'react';
import styled from 'styled-components';
import ContainerStyled from '../components/ContainerStyled';
import loupe from '../assets/images/lupa.svg';
import useFetchPokemonSearch from '../hooks/useFetchOnePokemon';
import { colors } from '../helpers/colors';
import PokemonResult from '../components/PokemonResult';
import Loader from '../components/Loader';
import Error from '../components/Error';

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

const ButtonStyled = styled.button`
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
`;

const SearchScreen = () => {
    const { pokemon, error, setError, loading, setLoading, value, setValue, fetchPokemon } = useFetchPokemonSearch();

    const input = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetchPokemon(value.toLowerCase());
    };

    const handleSearchAgain = () => {
        setLoading(false);
        setError(false);
        setValue('');
        input.current.focus();
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
                            ref={input}
                        />
                    </form>
                </div>
            </ContainerStyled>
            {loading && !error && <Loader />}
            {error && !loading && (
                <Error>
                    <ButtonStyled onClick={handleSearchAgain}>Search again</ButtonStyled>
                </Error>
            )}
            {!loading && pokemon && !error && <PokemonResult pokemon={pokemon} />}
        </SearchScreenStyled>
    );
};

export default SearchScreen;
