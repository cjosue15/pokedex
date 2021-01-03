import React from 'react';
import loupe from '../../assets/images/loupe.svg';
import styled from 'styled-components';

const Filter = styled.form`
    display: flex;
    align-items: center;
    input {
        font-family: inherit;
        display: block;
        width: 100%;
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        font-size: 1rem;
        color: #75757e;
        background-color: #fff;
        border: 1px solid #ced4da;
        background-image: url(${loupe});
        background-position: 93% 50%;
        background-repeat: no-repeat;
        background-size: 18px;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;

        &:focus {
            outline: none;
        }
    }

    .dropdown {
        border: 1px solid #ced4da;
        border-right: none;
        height: 40px;
        line-height: 40px;
        padding: 0 20px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
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
`;

const FilterStyled = ({ children }) => {
    return <Filter>{children}</Filter>;
};

export default FilterStyled;
