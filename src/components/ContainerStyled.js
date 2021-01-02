import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 100%;
    width: 1200px;
    margin: 0 auto;
`;

const ContainerStyled = ({ children }) => {
    return <Container>{children}</Container>;
};

export default ContainerStyled;
