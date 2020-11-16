import React from 'react';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
import { Button, Layout } from '@ui-kitten/components';
import AppTopBar from '../../common/AppTopBar';

const Container = styled(SafeAreaView)`
    flex: 1;
`;

const StyledLayout = styled(Layout)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const MealLogs = ({ navigation }) => {

    const navigateDetails = () => {
        navigation.navigate('Home');
    };
    
    return (
        <Container>
            <AppTopBar/>
            <StyledLayout>
                <Button onPress={navigateDetails}>History</Button>
            </StyledLayout>
        </Container>
    );
};

export default MealLogs;