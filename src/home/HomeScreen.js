import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import styled from 'styled-components';

const Container = styled(SafeAreaView)`
    flex: 1;
`;

const StyledLayout = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const HomeScreen = ({ navigation }) => {

    const navigateDetails = () => {
        navigation.navigate('User');
    };
    
    return (
        <Container>
            <TopNavigation title='DiDi Log' alignment='center'/>
            <Divider/>
            <StyledLayout>
                <Button onPress={navigateDetails}>Home</Button>
            </StyledLayout>
        </Container>
    );
};

export default HomeScreen;