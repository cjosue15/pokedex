import React from 'react';
import styled from 'styled-components';
import { colors } from '../helpers/colors';

const ProgressBarStyled = styled.div`
    background-color: #d8d8d8;
    border-radius: 20px;
    position: relative;
    margin-bottom: 15px;
    width: 100%;

    .done {
        /* background: linear-gradient(to left, #f2709c, #ff9472); */
        background-color: ${(props) => colors[props.type]};
        border-radius: 20px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 0;
        opacity: 1;
        transition: 1s ease 0.3s;
        color: #000;
        font-weight: bold;
    }
`;

const ProgressBar = ({ base, type }) => {
    return (
        <ProgressBarStyled type={type}>
            <div className='done' style={{ width: `${base > 100 ? 100 : base}%` }}>
                {`${base > 100 ? 100 : base}`} %
            </div>
        </ProgressBarStyled>
    );
};

export default ProgressBar;
