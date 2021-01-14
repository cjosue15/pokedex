import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../helpers/colors';
import ContainerStyled from './ContainerStyled';
import ProgressBar from './ProgressBar';

const PokemonResultStyled = styled.div`
    background-color: ${(props) => colors[props.type]};
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.page === 'detail' ? 'center' : 'flex-end')};
    flex: auto;

    .pokemonsearch-principal {
        padding-top: ${(props) => (props.page === 'detail' ? '100px' : null)};
        .content-principal {
            display: grid;
            grid-template-columns: 220px 1fr 60px;
            align-items: center;
            max-width: 1000px;
            width: 100%;
            margin: 0 auto;
            margin-bottom: 80px;
            gap: 50px;

            figure {
                margin: 0;
                img {
                    max-width: 100%;
                    vertical-align: bottom;
                }
            }

            .description {
                text-align: center;
                h2 {
                    font-size: 40px;

                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }

            .bar-info {
                background: #fff;
                box-shadow: 0 0 14px 0px rgba(0, 0, 0, 0.25);
                border-radius: 30px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;

                span {
                    font-weight: bold;
                    text-align: center;

                    &:first-child {
                        margin-bottom: 50px;
                    }

                    small {
                        font-weight: normal;
                        display: block;
                    }
                }
            }
        }
    }

    .pokemonsearch-info {
        width: 100%;
        background: #fff;
        border-top-right-radius: 60px;
        border-top-left-radius: 60px;
        padding: 30px;
        flex: ${(props) => (props.page === 'detail' ? 'auto' : null)};
        .content-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;

            h2 {
                margin-top: 0;
            }
        }
    }

    @media screen and (max-width: 700px) {
        .pokemonsearch-principal {
            padding-top: ${(props) => (props.page === 'detail' ? '50px' : null)};
            .content-principal {
                grid-template-columns: 1fr;
                justify-items: center;
                gap: 30px;

                figure {
                    max-width: 250px;
                    width: 100%;
                }

                .description {
                    h2 {
                        margin-top: 0px;
                    }
                }

                .bar-info {
                    width: 100%;
                    flex-direction: row;
                    padding: 10px 0;

                    .weight {
                        &:first-child {
                            margin-bottom: 0px;
                            margin-right: 50px;
                        }
                    }
                }
            }
        }

        .pokemonsearch-info {
            .content-info {
                grid-template-columns: 1fr;
            }
        }
    }
`;

const PokemonResult = ({ pokemon, page }) => {
    const [data, setData] = useState({
        description: '',
        is_legendary: null,
        is_mythical: null,
        egg_groups: [],
        generation: {},
    });

    const { name, id } = pokemon;

    const fetchDescription = async (pokemon) => {
        try {
            const response = await fetch(pokemon.species.url);
            const data = await response.json();
            setData({
                description: data.flavor_text_entries[6].flavor_text,
                is_legendary: data.is_legendary,
                is_mythical: data.is_mythical,
                egg_groups: data.egg_groups,
                generation: data.generation,
            });
        } catch (error) {}
    };

    const getEggGroups = (data) => {
        const words = [];

        if (!data || data.lenght === 0) {
            return '-';
        }

        data.forEach((item) => words.push(convertFirstLetterUppercase(item.name)));

        return words.join(', ');
    };

    const getSkills = (skills) => {
        const words = [];

        if (!skills || skills.lenght === 0) {
            return '-';
        }

        skills.forEach((item) => words.push(convertFirstLetterUppercase(item.ability.name)));

        return words.join(', ');
    };

    const convertFirstLetterUppercase = (item = '') => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    };

    useEffect(() => {
        fetchDescription(pokemon);
    }, [pokemon]);

    return (
        <PokemonResultStyled page={page} type={pokemon?.types[0].type.name || '#f7f7ee'}>
            <div className='pokemonsearch-principal'>
                <ContainerStyled>
                    <div className='content-principal'>
                        <figure>
                            <img
                                loading='lazy'
                                src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                                alt={name}
                            />
                        </figure>
                        <div className='description'>
                            <h2>{name}</h2>
                            <p>{data.description}</p>
                        </div>
                        <div className='bar-info'>
                            <span className='weight'>
                                W <small>{pokemon.weight / 10}kg</small>
                            </span>
                            <span className='height'>
                                H <small>{pokemon.height / 10}m</small>
                            </span>
                        </div>
                    </div>
                </ContainerStyled>
            </div>
            <div className='pokemonsearch-info'>
                <ContainerStyled>
                    <div className='content-info'>
                        <div className='pokemon-profile'>
                            <h2>Profile</h2>
                            <ul>
                                <li>
                                    Legendary: <span>{data.is_legendary ? 'Yes' : 'No'}</span>
                                </li>
                                <li>
                                    Mythical: <span>{data.is_mythical ? 'Yes' : 'No'}</span>
                                </li>
                                <li>
                                    Egg Group: <span>{getEggGroups(data.egg_groups)}</span>
                                </li>
                                <li>
                                    Generation: <span>{convertFirstLetterUppercase(data.generation.name)}</span>
                                </li>
                                <li>
                                    Base Experience: <span>{pokemon.base_experience}</span>
                                </li>
                                <li>
                                    Skills: <span>{getSkills(pokemon.abilities)}</span>
                                </li>
                            </ul>
                        </div>
                        <div className='pokemon-stats'>
                            <h2>Stats</h2>
                            {pokemon.stats &&
                                pokemon.stats.map((stat, index) => (
                                    <ProgressBar key={index} base={stat.base_stat} type={pokemon?.types[0].type.name} />
                                ))}
                        </div>
                    </div>
                </ContainerStyled>
            </div>
        </PokemonResultStyled>
    );
};

export default PokemonResult;
