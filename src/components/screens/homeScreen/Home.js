import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, Icon } from '@ui-kitten/components';
import styled from 'styled-components';
import AppTopBar from './../../AppTopBar';

const Container = styled(SafeAreaView)`
    flex: 1;
`;

const StyledLayout = styled(Layout)`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 12px;
`;

const AddMealButton = styled(Button)`
    margin: 12px;
    border-radius: 35px;
`;

const PlusIcon = (props) => (
    <Icon {...props} name='plus'/>
);

const Home = ({ navigation }) => {
    const navigateToNewMealScreen = () => {
        navigation.navigate('NewMeal');
    };

    return (
        <Container>
            <AppTopBar/>
            <Divider/>
            <StyledLayout>
                <AddMealButton
                    size='large'
                    accessoryLeft={PlusIcon}
                    onPress={navigateToNewMealScreen}
                >
                    MEAL
                </AddMealButton>
            </StyledLayout>
        </Container>
    );
};

export default Home;