import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 100%;
    width: ${(props) => (props.home === 'home' ? '350px' : '1200px')};
    padding: 0 2em;
    margin: 0 auto;

    @media screen and (min-width: 600px) {
        width: 1200px;
    }
`;

const ContainerStyled = ({ children, home }) => {
    return <Container home={home}>{children}</Container>;
};

export default ContainerStyled;
