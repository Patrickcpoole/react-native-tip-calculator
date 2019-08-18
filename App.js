import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';
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

			<Content style={{ backgroundColor: 'black' }}>
				<View style={styles.container}>
					<Values tipPercent={tipAmount} bill={inputValue} />
					<View style={styles.inputs}>
						<Text style={styles.inputText}> Input the cost of your meal</Text>
						<TextInput
							style={styles.input}
							value={inputValue}
							keyboardType='numeric'
							placeholder='0.00'
							underlineColorAndroid='#fff'
							placeholderTextColor='#fff'
							onChangeText={text => setInputValue(text)}
						/>
						<Text style={styles.buttonText}>
							How much would you like to tip?
						</Text>
						<View style={styles.buttonGroup}>
							<Button
								title='15%'
								onPress={() => setTipAmount(0.1)}
								style={styles.button}
							/>
							<Button
								title='20%'
								onPress={() => setTipAmount(0.2)}
								style={styles.button}
							/>
							<Button
								title='25%'
								onPress={() => setTipAmount(0.25)}
								style={styles.button}
							/>
							<TextInput
								value={(tipAmount * 100).toString()}
								style={styles.customTip}
								keyboardType='numeric'
								placeholder='20%'
								underlineColorAndroid='#fff'
								placeholderTextColor='#fff'
								onChangeText={customTip => updateCustomTip(customTip)}
							/>
						</View>
					</View>
				</View>
			</Content>
		</Container>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		height: '100%',
		width: '100%'
	},
	inputs: {
		backgroundColor: '#212121',
		padding: 20,
		width: '100%'
	},
	input: {
		borderWidth: 2,
		borderColor: '#fff',
		borderRadius: 20,
		height: 50,
		width: '100%',
		padding: 10,
		color: '#FFF'
	},
	inputText: {
		color: '#fff',
		fontSize: 25,
		padding: 20,
		textAlign: 'center'
	},
	button: {
		borderWidth: 2,
		borderRadius: 20,
		borderColor: '#fff',
		backgroundColor: '#fff'
	},
	buttonText: {
		color: '#fff',
		fontSize: 25,
		padding: 20,
		textAlign: 'center'
	},
	buttonGroup: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 10
	},
	customTip: {
		height: 40,
		width: 60,
		padding: 5,
		color: '#FFF',
		borderWidth: 1,
		borderColor: '#fff'
	}
});
