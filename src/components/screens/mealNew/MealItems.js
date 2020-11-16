import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Tab, TabBar } from '@ui-kitten/components';

const Container = styled(Layout)`
    flex: 1;
`;

const MealItems = () => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Container>
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