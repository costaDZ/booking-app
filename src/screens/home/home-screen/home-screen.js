import React from 'react';


import { Text } from 'react-native';

import styled from 'styled-components/native';


const HomeScreen = () => {
    return (
        <Container>
            <Text>HomeScreen</Text>
        </Container>
    )
}


const Container = styled.View`
    flex: 1;
    background-color: red;
    align-items: center;
    justify-content: center;
`;

export default HomeScreen