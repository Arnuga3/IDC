import React from 'react';
import { View } from 'react-native';
import { TopNavigation, Layout, Text, useTheme } from '@ui-kitten/components';
import styled from 'styled-components';
import MealItems from './MealItems';
import AppTopBar from './../../AppTopBar';

const Container = styled(Layout)`
    display: flex;
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
    background-color: rgba(255,255,255,.9);
    height: 100%;
    padding: 4px;
    margin: 8px 0;
`;

const NewMeal = () => {
    const theme = useTheme();
    return (
        <Container level='1'>
            <AppTopBar/>
            <NewMealSelection>
                <Text category='h6'>New Meal</Text>
                <Subtitle category='s1' color={theme['color-info-default']}>Pick previously added food items, add new or use saved templates</Subtitle>
                <SelectedItems>

                </SelectedItems>
            </NewMealSelection>
            <MealItems/>
        </Container>
    );
};

export default NewMeal;