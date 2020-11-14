import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { AppNavigator } from './src/AppNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { default as theme } from './theme.json';

export default function App() {
	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
				<AppNavigator />
			</ApplicationProvider>
		</>
	);
}