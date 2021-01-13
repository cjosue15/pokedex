import React from 'react';
import styled from 'styled-components';

const Filter = styled.form`
    display: flex;
    align-items: center;

    .search {
        color: #75757e;
        margin-right: 30px;
        text-decoration: none;
        span {
            color: #000;
            font-size: 12px;
            font-weight: bold;
        }
    }

    .dropdown {
        border: 1px solid #ced4da;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        border-radius: 20px;
        position: relative;
        width: 130px;
        flex-shrink: 0;
        cursor: pointer;

        .icon-arrow {
            position: absolute;
            width: 12px;
            height: 12px;
            line-height: 12px;
            right: 10px;
            top: calc(50% - 6px);

            img {
                max-width: 100%;
                vertical-align: bottom;
            }
        }

        .d-button {
            span {
                color: #75757e;
            }
        }

        &.active {
            .d-menu {
                display: block;
            }
        }

        .d-menu {
            display: none;
            width: 130px;
            position: absolute;
            top: 100%;
            left: 0;
            box-shadow: 0 0 0.875em rgba(0, 0, 0, 0.16);
            border-radius: 4px;
            padding: 0;
            margin: 10px 0 0 0;
            background: #fff;
            list-style-type: none;

            li {
                font-size: 15px;
                line-height: 30px;
                padding: 5px 20px;
                cursor: pointer;
                white-space: nowrap;
                color: #75757e;

                &:hover {
                    background: #f6f6f6;
                }
            }
        }
    }

    .close-icon {
        position: absolute;
        display: none;
        width: 25px;
        top: 50px;
        right: 50px;

        img {
            max-width: 100%;
            vertical-align: bottom;
        }
    }

    @media only screen and (max-width: 600px) {
        opacity: 0;
        visibility: hidden;
        z-index: 1;
        position: fixed;
        background: #fff;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        transition: all 0.25s ease-in-out;
        padding-top: 5em;

        &.active {
            opacity: 1;
            visibility: visible;
        }

        .search {
            margin-right: 0;
            margin-bottom: 40px;
            font-size: 18px;
        }

        .dropdown {
            width: 300px;
            max-width: 90%;

            .d-menu {
                height: 300px;
                overflow-y: scroll;
                width: 100%;

                li {
                    width: 300px;
                    max-width: 90%;
                }
            }
        }

        .close-icon {
            display: block;
        }
    }
`;

const FilterStyled = ({ children, isOpenMenu }) => {
    return <Filter className={`${isOpenMenu ? 'active' : ''}`}>{children}</Filter>;
};

export default FilterStyled;
