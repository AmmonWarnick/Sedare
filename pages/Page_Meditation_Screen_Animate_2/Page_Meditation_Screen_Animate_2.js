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
import {image_Fresh_Turboscent_1_2_link} from './assets/imageLinks.js'
const Page_Meditation_Screen_Animate_2  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page8}    >
			<Text style = {noneModeStyles._Meditation_Screen}   >
				Meditation Screen
			</Text>
			<View style = {noneModeStyles._Turquoise_flow_1}    >
			</View>
			<View style = {noneModeStyles.style3}    >
				<View style = {noneModeStyles.style4}   >
					<Svg style={{height: 800, width: 800}} viewBox = "0 0 800 800">
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style5}    >
				<View style = {noneModeStyles.style6}   >
					<Svg style={{height: 820, width: 772}} viewBox = "0 0 772 820">
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style7}    >
				<View style = {noneModeStyles.style8}   >
					<Svg style={{height: 839, width: 780}} viewBox = "0 0 780 839">
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles._Header_With_Back}    >
				<View style = {noneModeStyles._TOP}    >
					<View style = {noneModeStyles._Fresh_Turboscent_1_container}    >
						<View style = {noneModeStyles._Fresh_Turboscent_1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fresh_Turboscent_1_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Find_Your_Calm_Place}   >
						Sedare
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
			<View style = {noneModeStyles._PrimaryButton}    >
				<View style = {noneModeStyles._PrimaryButton_2}    >
				</View>
				<View style = {noneModeStyles._Fresh_Turboscent_1_container_2}    >
					<View style = {noneModeStyles._Fresh_Turboscent_1_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fresh_Turboscent_1_2_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Let_s_Begin}   >
					    Finish
				</Text>
				<View style = {noneModeStyles.style23}    >
					<View style = {noneModeStyles.style24}   >
						<Svg style={{height: 34, width: 42}} viewBox = "0 0 42 34">
							<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M23.5 1L41 17L23.5 33M1 17H41H1Z"/>
						</Svg>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Meditation_Screen_Animate_2

const noneModeStyles = StyleSheet.create({
_page8: {
	height: 844,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Meditation_Screen: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 110,
	top: 74,
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "left",
	},
_Turquoise_flow_1: {
	width: 390,
	height: 747.835,
	backgroundColor: "rgb(156, 237, 255)",
	position: "absolute",
	left: 0,
	top: 100,
	},
style3: {
	width: 500,
	height: 500,
	position: "absolute",
	left: -35,
	top: 80,
	},
style4: {
	},
style5: {
	width: 572.062,
	height: 572.061,
	position: "absolute",
	left: 179.156,
	top: 404,
	},
style6: {
	},
style7: {
	width: 704.416,
	height: 704.416,
	position: "absolute",
	left: -106.022,
	top: 329.584,
	},
style8: {
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
_PrimaryButton: {
	width: 275,
	height: 49,
	position: "absolute",
	left: 59,
	top: 763,
	},
_PrimaryButton_2: {
	width: 275,
	height: 49,
	backgroundColor: "rgb(93, 173, 236)",
	position: "absolute",
	borderRadius: 30,
	},
_Fresh_Turboscent_1_container_2: {
	width: 275,
	height: 49,
	position: "absolute",
	},
_Fresh_Turboscent_1_2: {
	width: "100%",
	height: "100%",
	borderRadius: 20,
	},
_Let_s_Begin: {
	width: 162.349,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 56},
		{translateY: 14},
	],
	color: "rgb(252, 252, 252)",
	fontSize: 25,
	fontWeight: "700",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "left",
	},
style23: {
	position: "absolute",
	transform: [
		{translateX: 203},
		{translateY: 9},
	],
	},
style24: {
	},
})

