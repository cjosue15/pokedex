import React from 'react';
import Wrapper from './components/Wrapper';
import PokedexRouter from './routes/PokedexRouter';

const Pokedex = () => {
    return (
        <Wrapper>
            <div className='container'>
                <PokedexRouter />
            </div>
        </Wrapper>
    );
};

export default Pokedex;
