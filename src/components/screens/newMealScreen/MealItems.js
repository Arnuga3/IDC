import React, { useState } from 'react';
import { Layout, Tab, TabBar } from '@ui-kitten/components';
import styled from 'styled-components';
import ItemModal from './ItemModal';

const Container = styled(Layout)`
    padding-top: 12px;
    flex: 2;
`;

const MealItems = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Container>
            <ItemModal/>
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