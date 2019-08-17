import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View>
			<Text style={styles.hello}>Hello from ios</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	hello: {
		backgroundColor: '#00FFFF',
		fontSize: 24
	}
});
