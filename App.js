import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	Platform,
	StatusBar
} from 'react-native';
import {
	Container,
	Content,
	Header,
	Left,
	Body,
	Title,
	Right
} from 'native-base';

import Hello from './Hello';

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

	let tip = 0.0;
	if (inputValue) {
		tip = parseFloat(inputValue) * tipAmount;
		tip = (Math.round(tip * 100) / 100).toFixed(2);
	}
	if (!isReady) {
		return <AppLoading />;
	}
	return (
		<Container>
			<View style={styles.header}>
				<Header>
					<Left />
					<Body>
						<Title>Header</Title>
					</Body>
					<Right />
				</Header>
			</View>
			<Content padder>
				<View style={styles.container}>
					{/* <Hello /> */}
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
	header: {
		...Platform.select({
			android: {
				marginTop: StatusBar.currentHeight
			}
		})
	},
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
