import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Values = ({ tipPercent, bill }) => {
	let tip = 0.0;
	let total = 0.0;
	if (bill) {
		tip = parseFloat(bill) * tipPercent;
		total = parseFloat(bill) + tip;
		tip = (Math.round(tip * 100) / 100).toFixed(2);
		total = (Math.round(total * 100) / 100).toFixed(2);
	}
	return (
		<View style={styles.values}>
			<View style={styles.tipContainer}>
				<Text style={styles.label}>Tip Amount</Text>
				<Text style={styles.tip}>${tip}</Text>
			</View>
			<View style={styles.totalContainer}>
				<Text style={styles.label}>Total Bill</Text>
				<Text style={styles.total}>${total}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	values: {
		alignItems: 'center',
		justifyContent: 'space-around',
		padding: 20,
		backgroundColor: '#484848',
		width: '100%',
		height: '50%'
	},
	label: {
		color: '#fff',
		fontSize: 20
	},
	tipContainer: {
		flexDirection: 'column'
	},

	tip: {
		fontSize: 50,
		color: '#fff',
		fontWeight: 'bold'
	},
	total: {
		fontSize: 50,
		color: '#fff',
		fontWeight: 'bold'
	},
	totalContainer: {
		flexDirection: 'column'
	}
});

export default Values;
