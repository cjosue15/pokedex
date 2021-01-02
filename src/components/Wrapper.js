import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.main`
    min-height: 100vh;
    .container {
        max-width: 100%;
        width: 1200px;
        margin: 0 auto;
    }
`;

const Wrapper = ({ children }) => {
    return <WrapperStyled>{children}</WrapperStyled>;
};

export default Wrapper;
