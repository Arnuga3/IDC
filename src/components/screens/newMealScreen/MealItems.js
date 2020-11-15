import React, { useState } from 'react';
import { View } from 'react-native';
import { Layout, Tab, TabBar, Button, Icon } from '@ui-kitten/components';
import styled from 'styled-components';

const Container = styled(Layout)`
    padding-top: 12px;
    flex: 2;
`;

const AddItemButton = styled(Button)`
    margin: 0 0 12px 0;
`;

const PlusIcon = (props) => (
    <Icon {...props} name='plus'/>
);

const MealItems = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Container>
            <AddItemButton appearance='outline' status='info' accessoryLeft={PlusIcon}/>
            <TabBar
                selectedIndex={tabIndex}
                onSelect={index => setTabIndex(index)}
            >
                <Tab title='All'/>
                <Tab title='Categories'/>
            </TabBar>
        </Container>
    );
};

export default MealItems;