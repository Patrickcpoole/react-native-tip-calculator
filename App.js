import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Hello from './Hello';

export default function App() {
	const [inputValue, setInputValue] = useState('');
	const [tipAmount, setTipAmount] = useState(0.2);

	let tip = 0.0;
	if (inputValue) {
		tip = parseFloat(inputValue) * tipAmount;
		tip = (Math.round(tip * 100) / 100).toFixed(2);
	}
	return (
		<View style={styles.container}>
			<Text>${tip}</Text>
			<TextInput
				style={styles.input}
				value={inputValue}
				keyboardType='numeric'
				placeholder='0.00'
				onChangeText={text => setInputValue(text)}
			/>
			<View style={styles.buttonGroup}>
				<Button title='15%' onPress={() => setTipAmount(0.1)} />
				<Button title='20%' onPress={() => setTipAmount(0.2)} />
				<Button title='25%' onPress={() => setTipAmount(0.25)} />
				<TextInput
					keyboardType='numeric'
					placeholder='20%'
					onChangeText={customTip => this.updateCustomTip(customTip)}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	},
	input: {
		height: 40,
		width: '100%',
		borderColor: '#333',
		borderWidth: 1,
		padding: 5
	},
	buttonGroup: {
		flexDirection: 'row'
	}
});
