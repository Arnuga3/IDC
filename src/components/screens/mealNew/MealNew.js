import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import { Layout, Text, Button, useTheme } from '@ui-kitten/components';
import AppTopBar from '../../common/AppTopBar';
import Title from '../../common/Title';
import MealItems from './MealItems';

const Container = styled(Layout)`
    flex: 1;
    padding: 16px;
`;

const NewMealSelection = styled(View)`
    margin-top: 12px;
    flex: 1;
`;

const Subtitle = styled(Text)`
    color: ${({ color }) => color};
`;

const SelectedItems = styled(View)`
    flex: 1;
    padding: 4px;
    margin: 8px 0;
    border: 1px solid ${({ color }) => color};
`;

const OrLabel = styled(Text)`
    width: 100%;
    text-align: center;
    margin-top: 8px;
    color: grey;
`;

const MealNew = ({ navigation }) => {
    const theme = useTheme();

    const navigateToMealItemForm = () => {
        navigation.navigate('MealItemForm');
    };

    return (
        <Container level='1'>
            <AppTopBar/>
            <NewMealSelection>
                <Title category='h6'>New Meal</Title>
                <Subtitle category='s1' color={theme['color-primary-default']}>Pick previously added food items, add new or use saved templates</Subtitle>
                <SelectedItems color={theme['color-primary-default']}>

                </SelectedItems>
            </NewMealSelection>
            <Button
                status='info'
                onPress={navigateToMealItemForm}
            >
                New Item
            </Button>
            <OrLabel>- or -</OrLabel>
            <MealItems/>
        </Container>
    );
};

export default MealNew;