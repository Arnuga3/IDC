import React from 'react';
import { Text } from '@ui-kitten/components';
import styled from 'styled-components';

const TitleStyled = styled(Text)`
    margin: 8px 4px;
`;

const Title = ({ children }) => (
    <TitleStyled category='h4'>{children}</TitleStyled>
);

export default Title;