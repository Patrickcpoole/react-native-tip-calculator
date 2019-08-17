import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { Container, Content } from 'native-base';

//import Hello from './Hello';

import Head from './ui/Head';
import Values from './ui/Values';

export default function App() {
	const [inputValue, setInputValue] = useState('');
	const [tipAmount, setTipAmount] = useState(0.2);
	const [isReady, setReady] = useState(false);

	useEffect(() => {
		const loadFonts = async () => {
			await Font.loadAsync({
				Roboto: require('native-base/Fonts/Roboto.ttf'),
				Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
				...Ionicons.font
			});
			setReady(true);
		};
		loadFonts();
	});

	const updateCustomTip = customTip => {
		if (customTip) {
			setTipAmount(parseFloat(customTip) / 100);
		} else {
			setTipAmount(0);
		}
	};

	if (!isReady) {
		return <AppLoading />;
	}

	return (
		<Container>
			<Head />
			<Content padder>
				<View style={styles.container}>
					<Values tipPercent={tipAmount} bill={inputValue} />
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
							value={(tipAmount * 100).toString()}
							style={styles.customTip}
							keyboardType='numeric'
							placeholder='20%'
							onChangeText={customTip => updateCustomTip(customTip)}
						/>
					</View>
				</View>
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center'
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
	},
	customTip: {
		height: 30,
		width: 60,
		borderColor: '#333',
		borderWidth: 1,
		padding: 5
	}
});
