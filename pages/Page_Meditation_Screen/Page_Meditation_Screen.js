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
import {image_Rectangle_15_link} from './assets/imageLinks.js'
const Page_Meditation_Screen  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page0}    >
			<View style = {noneModeStyles._Header_With_Back}    >
				<View style = {noneModeStyles._TOP}    >
					<View style = {noneModeStyles._Fresh_Turboscent_1_container}    >
						<View style = {noneModeStyles._Fresh_Turboscent_1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fresh_Turboscent_1_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Find_Your_Calm_Place}   >
						Meditation Summary
					</Text>
				</View>
				<View style = {noneModeStyles._Back_Button}    >
					<View style = {noneModeStyles._Rectangle_14}    >
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._10_minutes}   >
				10 minutes
			</Text>
			<Text style = {noneModeStyles._60_bpm}   >
				60 bpm
			</Text>
			<Text style = {noneModeStyles._Meditation_Time}   >
				Meditation Time
			</Text>
			<Text style = {noneModeStyles._Average_Heart_Rate}   >
				Average Heart Rate
			</Text>
			<Text style = {noneModeStyles._Meditation_Tips}   >
				Meditation Tips
			</Text>
			<Text style = {noneModeStyles._Focus_on_your_breathing_Long_breaths_in__quick_breaths_out_to_regulate_breathing_patterns_Clear_your_mind}   >
				Focus on your breathing{'\n'}Long breaths in, quick breaths out to regulate breathing patterns{'\n'}Clear your mind
			</Text>
			<View style = {noneModeStyles._Rectangle_15_container}    >
				<View style = {noneModeStyles._Rectangle_15}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_15_link}}/>
				</View>
			</View>
			<View style = {noneModeStyles._PrimaryButton}    >
				<View style = {noneModeStyles._PrimaryButton_2}    >
				</View>
				<Text style = {noneModeStyles._Let_s_Begin} >
					Home
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Meditation_Screen

const noneModeStyles = StyleSheet.create({
_page0: {
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
_10_minutes: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 70,
	top: 210,
	color: "rgb(0, 0, 0)",
	fontSize: 48,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_60_bpm: {
	width: 174,
	height: 60,
	position: "absolute",
	left: 158,
	top: 422,
	color: "rgb(79, 112, 229)",
	fontSize: 48,
	fontWeight: "700",
	lineHeight: 56.25,
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_Meditation_Time: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 58},
		{translateY: 122},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "left",
	},
_Average_Heart_Rate: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 33},
		{translateY: 329},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "left",
	},
_Meditation_Tips: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 66},
		{translateY: 553},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "left",
	},
_Focus_on_your_breathing_Long_breaths_in__quick_breaths_out_to_regulate_breathing_patterns_Clear_your_mind: {
	width: 313,
	height: 168,
	position: "absolute",
	transform: [
		{translateX: 44},
		{translateY: 611},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	lineHeight: 28.125,
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "left",
	},
_Rectangle_15_container: {
	width: 60,
	height: 60,
	position: "absolute",
	left: 72,
	top: 422,
	},
_Rectangle_15: {
	width: "100%",
	height: "100%",
	},
_PrimaryButton: {
	width: 275,
	height: 49,
	position: "absolute",
	left: 65,
	top: 777,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(93, 173, 236)",
	borderRadius: 20,
	},
_PrimaryButton_2: {
	width: 275,
	height: 49,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 30,
	},
_Let_s_Begin: {
	width: 162.35,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 56},
		{translateY: 14},
	],
	color: "rgb(93, 173, 236)",
	fontSize: 25,
	fontWeight: "700",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
})

