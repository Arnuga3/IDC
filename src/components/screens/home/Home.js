import React from 'react';
import styled from 'styled-components';
import { SafeAreaView } from 'react-native';
import { Button, Layout, Icon } from '@ui-kitten/components';
import AppTopBar from '../../common/AppTopBar';

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
    <Icon {...props} name='plus-circle'/>
);

const Home = ({ navigation }) => {
    const navigateToNewMealScreen = () => {
        navigation.navigate('MealNew');
    };

    return (
        <Container>
            <AppTopBar/>
            <StyledLayout>
                <AddMealButton
                    size='large'
                    status='info'
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