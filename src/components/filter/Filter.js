import React, { useState } from 'react';
import { types } from '../../helpers/types';
import down from '../../assets/images/arrow-down.svg';
import up from '../../assets/images/arrow-up.svg';
import FilterStyled from './FilterStyled';

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [typeSelected, setTypeSelected] = useState('Select');

    const handleClose = (name) => {
        setTypeSelected(name);
    };

    return (
        <FilterStyled>
            <div className={`dropdown ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <i className='icon-arrow'>
                    <img src={isOpen ? up : down} alt='Arrow' />
                </i>
                <div className='d-button'>
                    <span>{typeSelected}</span>
                </div>
                <ul className='d-menu'>
                    {types.map(({ id, name }) => (
                        <li onClick={() => handleClose(name)} key={id}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
            <input type='text' placeholder='Search your pokemons' />
        </FilterStyled>
    );
};

export default Filter;
