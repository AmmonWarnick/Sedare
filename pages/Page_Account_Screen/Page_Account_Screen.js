import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_Fresh_Turboscent_1_link} from './assets/imageLinks.js'
const Page_Account_Screen  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page12}    >
			<View style = {noneModeStyles._Header_With_Back}    >
				<View style = {noneModeStyles._TOP}    >
					<View style = {noneModeStyles._Fresh_Turboscent_1_container}    >
						<View style = {noneModeStyles._Fresh_Turboscent_1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fresh_Turboscent_1_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Find_Your_Calm_Place}   >
						Account Page
					</Text>
				</View>
				<View style = {noneModeStyles._Back_Button}    >
					<View style = {noneModeStyles._Rectangle_14}    >
					</View>
					<View style = {noneModeStyles.____Back}    >
						<Text style = {noneModeStyles.____Back_2}   >
								{/* this is where the back button should be */}
								</Text>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Account_Screen

const noneModeStyles = StyleSheet.create({
_page12: {
	height: 844,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Header_With_Back: {
	width: 390,
	height: 100,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_TOP: {
	width: 392,
	height: 100,
	position: "absolute",
	},
_Fresh_Turboscent_1_container: {
	width: 392,
	height: 100,
	position: "absolute",
	},
_Fresh_Turboscent_1: {
	width: "100%",
	height: "100%",
	},
_Find_Your_Calm_Place: {
	width: 263,
	height: 24,
	position: "absolute",
	transform: [
		{translateX: 65},
		{translateY: 54},
	],
	color: "rgb(252, 252, 252)",
	fontSize: 25,
	fontWeight: "700",
	lineHeight: 29.2969,
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_Back_Button: {
	width: 131,
	height: 62,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: -16},
	],
	},
_Rectangle_14: {
	width: 131,
	height: 62,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	},
____Back: {
	width: 67,
	height: 20,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 32},
		{translateY: 21},
	],
	},
____Back_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	color: "rgb(252, 252, 252)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "left",
	},
})

