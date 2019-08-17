import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';

import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Header, Left, Body, Title, Right } from 'native-base';

export default function Head() {
	return (
		<View style={styles.header}>
			<Header>
				<Left />
				<Body>
					<Title>Header</Title>
				</Body>
				<Right />
			</Header>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		...Platform.select({
			android: {
				marginTop: StatusBar.currentHeight
			}
		})
	}
});
