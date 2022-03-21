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
import {image_BackgroundBox_2_link} from './assets/imageLinks.js'
import {image_BackgroundBox_4_link} from './assets/imageLinks.js'
import {image_BackgroundBox_6_link} from './assets/imageLinks.js'
import {image_BackgroundBox_8_link} from './assets/imageLinks.js'
import {image_BackgroundBox_10_link} from './assets/imageLinks.js'
import {image_BackgroundBox_12_link} from './assets/imageLinks.js'
import {image_BackgroundBox_14_link} from './assets/imageLinks.js'
import {image_BackgroundBox_16_link} from './assets/imageLinks.js'
import {image_Fresh_Turboscent_1_link} from './assets/imageLinks.js'
import {image_Fresh_Turboscent_1_2_link} from './assets/imageLinks.js'
const Page_Mood_Sceren  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page4}    >
			<View style = {noneModeStyles._BackgroundBox}    >
				<View style = {noneModeStyles._BackgroundBox_container}    >
					<View style = {noneModeStyles._BackgroundBox_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_BackgroundBox_2_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Rain_Forest}   >
					Rain Forest
				</Text>
			</View>
			<View style = {noneModeStyles._BackgroundBox_3}    >
				<View style = {noneModeStyles._BackgroundBox_container_2}    >
					<View style = {noneModeStyles._BackgroundBox_4}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_BackgroundBox_4_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Rain_Forest_2}   >
					Sunny Desert
				</Text>
			</View>
			<View style = {noneModeStyles._BackgroundBox_5}    >
				<View style = {noneModeStyles._BackgroundBox_container_3}    >
					<View style = {noneModeStyles._BackgroundBox_6}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_BackgroundBox_6_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Rain_Forest_3}   >
					Mountain Lake
				</Text>
			</View>
			<View style = {noneModeStyles._BackgroundBox_7}    >
				<View style = {noneModeStyles._BackgroundBox_container_4}    >
					<View style = {noneModeStyles._BackgroundBox_8}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_BackgroundBox_8_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Rain_Forest_4}   >
					Campfire
				</Text>
			</View>
			<View style = {noneModeStyles._BackgroundBox_9}    >
				<View style = {noneModeStyles._BackgroundBox_container_5}    >
					<View style = {noneModeStyles._BackgroundBox_10}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_BackgroundBox_10_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Rain_Forest_5}   >
					Ocean
				</Text>
			</View>
			<View style = {noneModeStyles._BackgroundBox_11}    >
				<View style = {noneModeStyles._BackgroundBox_container_6}    >
					<View style = {noneModeStyles._BackgroundBox_12}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_BackgroundBox_12_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Rain_Forest_6}   >
					Calm Woods
				</Text>
			</View>
			<View style = {noneModeStyles._BackgroundBox_13}    >
				<View style = {noneModeStyles._BackgroundBox_container_7}    >
					<View style = {noneModeStyles._BackgroundBox_14}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_BackgroundBox_14_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Rain_Forest_7}   >
					Sunrise
				</Text>
			</View>
			<View style = {noneModeStyles._BackgroundBox_15}    >
				<View style = {noneModeStyles._BackgroundBox_container_8}    >
					<View style = {noneModeStyles._BackgroundBox_16}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_BackgroundBox_16_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._Rain_Forest_8}   >
					Waterfall
				</Text>
			</View>
			<View style = {noneModeStyles._Bottom}    >
				<View style = {noneModeStyles._Rectangle_10}    >
				</View>
				<View style = {noneModeStyles._PrimaryButton}    >
					<View style = {noneModeStyles._PrimaryButton_2}    >
					</View>
					<View style = {noneModeStyles._Fresh_Turboscent_1_container}    >
						<View style = {noneModeStyles._Fresh_Turboscent_1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fresh_Turboscent_1_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Let_s_Begin}   >
						Pick Music
					</Text>
					<View style = {noneModeStyles.style40}    >
						<View style = {noneModeStyles.style41}   >
							<Svg style={{height: 34, width: 44}} viewBox = "0 0 44 34">
								<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M24.6239 1.00917L42.9908 16.7033L24.6239 32.3973M1.00917 16.7033H42.9908H1.00917Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._TOP}    >
				<View style = {noneModeStyles._Header_With_Back}    >
					<View style = {noneModeStyles._TOP_2}    >
						<View style = {noneModeStyles._Fresh_Turboscent_1_container_2}    >
							<View style = {noneModeStyles._Fresh_Turboscent_1_2}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fresh_Turboscent_1_2_link}}/>
							</View>
						</View>
						<Text style = {noneModeStyles._Find_Your_Calm_Place}   >
							Choose a Background
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
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Mood_Sceren

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 991,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_BackgroundBox: {
	width: 120,
	height: 154,
	position: "absolute",
	left: 35,
	top: 146,
	},
_BackgroundBox_container: {
	width: 120,
	height: 120,
	position: "absolute",
	},
_BackgroundBox_2: {
	width: "100%",
	height: "100%",
	borderRadius: 20,
	},
_Rain_Forest: {
	width: 120,
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 134},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_BackgroundBox_3: {
	width: 120,
	height: 154,
	position: "absolute",
	left: 36,
	top: 524,
	},
_BackgroundBox_container_2: {
	width: 120,
	height: 120,
	position: "absolute",
	},
_BackgroundBox_4: {
	width: "100%",
	height: "100%",
	borderRadius: 20,
	},
_Rain_Forest_2: {
	width: 120,
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 134},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_BackgroundBox_5: {
	width: 120,
	height: 154,
	position: "absolute",
	left: 35,
	top: 335,
	},
_BackgroundBox_container_3: {
	width: 120,
	height: 120,
	position: "absolute",
	},
_BackgroundBox_6: {
	width: "100%",
	height: "100%",
	borderRadius: 20,
	},
_Rain_Forest_3: {
	width: 120,
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 134},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_BackgroundBox_7: {
	width: 120,
	height: 154,
	position: "absolute",
	left: 36,
	top: 713,
	},
_BackgroundBox_container_4: {
	width: 120,
	height: 120,
	position: "absolute",
	},
_BackgroundBox_8: {
	width: "100%",
	height: "100%",
	borderRadius: 20,
	},
_Rain_Forest_4: {
	width: 120,
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 134},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_BackgroundBox_9: {
	width: 120,
	height: 154,
	position: "absolute",
	left: 235,
	top: 146,
	},
_BackgroundBox_container_5: {
	width: 120,
	height: 120,
	position: "absolute",
	},
_BackgroundBox_10: {
	width: "100%",
	height: "100%",
	borderRadius: 20,
	},
_Rain_Forest_5: {
	width: 120,
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 134},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_BackgroundBox_11: {
	width: 120,
	height: 154,
	position: "absolute",
	left: 235,
	top: 524,
	},
_BackgroundBox_container_6: {
	width: 120,
	height: 120,
	position: "absolute",
	},
_BackgroundBox_12: {
	width: "100%",
	height: "100%",
	borderRadius: 20,
	},
_Rain_Forest_6: {
	width: 120,
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 134},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_BackgroundBox_13: {
	width: 120,
	height: 154,
	position: "absolute",
	left: 235,
	top: 335,
	},
_BackgroundBox_container_7: {
	width: 120,
	height: 120,
	position: "absolute",
	},
_BackgroundBox_14: {
	width: "100%",
	height: "100%",
	borderRadius: 20,
	},
_Rain_Forest_7: {
	width: 120,
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 134},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_BackgroundBox_15: {
	width: 120,
	height: 154,
	position: "absolute",
	left: 235,
	top: 713,
	},
_BackgroundBox_container_8: {
	width: 120,
	height: 120,
	position: "absolute",
	},
_BackgroundBox_16: {
	width: "100%",
	height: "100%",
	borderRadius: 20,
	},
_Rain_Forest_8: {
	width: 120,
	height: "auto",
	position: "absolute",
	transform: [
		{translateY: 134},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_Bottom: {
	width: 390,
	height: 107,
	position: "absolute",
	left: 0,
	top: 740,
	},
_Rectangle_10: {
	width: 390,
	height: 107,
	backgroundColor: "rgb(252, 252, 252)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_PrimaryButton: {
	width: 286,
	height: 47.6262,
	position: "absolute",
	left: 52,
	top: 32.0748,
	},
_PrimaryButton_2: {
	width: 286,
	height: 47.6262,
	backgroundColor: "rgb(93, 173, 236)",
	position: "absolute",
	borderRadius: 30,
	},
_Fresh_Turboscent_1_container: {
	width: 286,
	height: 47.6262,
	position: "absolute",
	},
_Fresh_Turboscent_1: {
	width: "100%",
	height: "100%",
	borderRadius: 20,
	},
_Let_s_Begin: {
	width: 168.843,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 58.24},
		{translateY: 13.6075},
	],
	color: "rgb(252, 252, 252)",
	fontSize: 25,
	fontWeight: "700",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "left",
	},
style40: {
	position: "absolute",
	transform: [
		{translateX: 211.12},
		{translateY: 8.74768},
	],
	},
style41: {
	},
_TOP: {
	width: 390,
	height: 100,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Header_With_Back: {
	width: 390,
	height: 100,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_TOP_2: {
	width: 392,
	height: 100,
	position: "absolute",
	},
_Fresh_Turboscent_1_container_2: {
	width: 392,
	height: 100,
	position: "absolute",
	},
_Fresh_Turboscent_1_2: {
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

