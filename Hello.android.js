import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View>
			<Text style={styles.hello}>Hello from Android</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	hello: {
		backgroundColor: '#00FF00',
		fontSize: 24
	}
});
