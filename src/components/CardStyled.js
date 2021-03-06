import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../helpers/colors';

const LinkStyled = styled(Link)`
    background-color: ${(props) => colors[props.type]};
    position: relative;
    border-radius: 20px;
    padding: 16px;
    overflow: hidden;
    text-decoration: none;
    box-shadow: 0 0 14px 0px rgba(0, 0, 0, 0.25);

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
            margin-right: 15px;

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
