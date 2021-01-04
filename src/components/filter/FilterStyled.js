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
`;

const FilterStyled = ({ children }) => {
    return <Filter>{children}</Filter>;
};

export default FilterStyled;
