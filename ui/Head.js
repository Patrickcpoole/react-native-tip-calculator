import React from 'react';

import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Header, Left, Body, Title, Right } from 'native-base';

const Head = () => {
	return (
		<View style={styles.header}>
			<Header>
				<Left />
				<Body>
					<Title>Tip Calculator</Title>
				</Body>
				<Right />
			</Header>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		...Platform.select({
			android: {
				marginTop: StatusBar.currentHeight
			}
		})
	}
});

export default Head;
