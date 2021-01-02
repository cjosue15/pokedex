import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
    fire: '#fb6c6c',
    grass: '#48d0b0',
    electric: '#ffea80',
    water: '#77bdfe',
    ground: '#c5b280',
    rock: '#d5d5d4',
    fairy: '#f7c5ff',
    poison: '#d0c8ef',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#d2d2d2',
};

const LinkStyled = styled(Link)`
    background-color: ${(props) => colors[props.type]};
    position: relative;
    border-radius: 20px;
    padding: 16px;
    overflow: hidden;
    text-decoration: none;

    &:focus {
        outline: none;
    }

    .pokebola {
        position: absolute;
        top: -55px;
        right: -100px;
    }

    figure {
        margin: 0;
        flex-shrink: 0;
        img {
            max-width: 100%;
        }
    }

    .number-pokemon {
        text-align: right;
        margin-bottom: 10px;
        span {
            color: #fff;
            font-size: 30px;
            font-weight: 700;
        }
    }

    .pokemon-content {
        display: flex;
        align-items: center;

        .pokemon-info {
            flex: auto;

            h1 {
                margin: 0px 0px 10px 0;
                font-size: 25px;
                line-height: 25px;
                font-weight: 600;
                color: #fff;

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            span {
                color: #fff;
            }
        }
    }
`;

const CardStyled = ({ children, type, id }) => {
    return (
        <LinkStyled type={type} to={`/detail/${id}`}>
            {children}
        </LinkStyled>
    );
};

export default CardStyled;
