import React from 'react';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

const Container = styled(SafeAreaView)`
    flex: 1;
`;

const StyledLayout = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const UserAccount = ({ navigation }) => {

    const navigateDetails = () => {
        navigation.navigate('Home');
    };
    
    return (
        <Container>
            <TopNavigation title='DiDi Log' alignment='center'/>
            <Divider/>
            <StyledLayout>
                <Button onPress={navigateDetails}>User</Button>
            </StyledLayout>
        </Container>
    );
};

export default UserAccount;