import React from 'react';
import pokebola from '../assets/images/pokebola.svg';
import CardStyled from './CardStyled';

const PokemonCard = ({ id, name, type }) => {
    return (
        <CardStyled type={type} id={id}>
            <img className='pokebola' src={pokebola} alt='Pokebola' />
            <div className='number-pokemon'>
                <span>#{id}</span>
            </div>
            <div className='pokemon-content'>
                <div className='pokemon-info'>
                    <h1>{name}</h1>
                    <span>Type: {type}</span>
                </div>

                <figure>
                    <img
                        loading='lazy'
                        height='150'
                        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                        alt={name}
                    />
                </figure>
            </div>
        </CardStyled>
    );
};

export default PokemonCard;
