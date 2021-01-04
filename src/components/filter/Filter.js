import React, { useContext, useState } from 'react';
import { types } from '../../helpers/types';
import down from '../../assets/images/arrow-down.svg';
import up from '../../assets/images/arrow-up.svg';
import FilterStyled from './FilterStyled';
import { PokedexContext } from '../../contex/PokedexContex';
import { Link } from 'react-router-dom';

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { typeSelected, handleSelectType } = useContext(PokedexContext);

    return (
        <FilterStyled>
            <Link className='search' to='/search'>
                <span>01.</span> Search Pokemons
            </Link>
            <div className={`dropdown ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <i className='icon-arrow'>
                    <img src={isOpen ? up : down} alt='Arrow' />
                </i>
                <div className='d-button'>
                    <span>{typeSelected.name}</span>
                </div>
                <ul className='d-menu'>
                    {types.map(({ id, name }) => (
                        <li onClick={() => handleSelectType({ id, name })} key={id}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </FilterStyled>
    );
};

export default Filter;
