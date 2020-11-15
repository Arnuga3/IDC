import React from 'react';
import { TopNavigation } from '@ui-kitten/components';
import { APPNAME, APPSUBTITLE } from './../constants';

const AppTopBar = () => (
    <TopNavigation title={APPNAME} subtitle={APPSUBTITLE} alignment='center'/>
);

export default AppTopBar;