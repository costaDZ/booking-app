import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';



const HomeScreen = ({ navigation }) => {
    return (
        <Container>
            <Text>Home</Text>

            <Button
                title="Go to Details"
                onPress={() => { navigation.navigate('details') }}
            />

        </Container>
    )
}


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export default HomeScreen