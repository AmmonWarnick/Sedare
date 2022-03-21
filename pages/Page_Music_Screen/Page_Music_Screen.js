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
import {image_Fresh_Turboscent_1_7_link} from './assets/imageLinks.js'
import {image_Fresh_Turboscent_1_8_link} from './assets/imageLinks.js'
const Page_Music_Screen  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page2}    >
			<View style = {noneModeStyles._MusicBox}    >
				<View style = {noneModeStyles._Fresh_Turboscent_1}    >
				</View>
				<View style = {noneModeStyles._Music_Icon}    >
					<View style = {noneModeStyles._Rectangle_13}    >
					</View>
					<View style = {noneModeStyles._layer_a8b126}    >
						<View style = {noneModeStyles._layer_7fc0b8}   >
							<Svg style={{height: 35, width: 30}} viewBox = "0 0 30 35">
								<Path fill = {"black"}     d = "M0 0L30 17.5L0 35V0Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Soothing_Waves}   >
					Soothing Waves
				</Text>
			</View>
			<View style = {noneModeStyles._MusicBox_2}    >
				<View style = {noneModeStyles._Fresh_Turboscent_1_2}    >
				</View>
				<View style = {noneModeStyles._Music_Icon_2}    >
					<View style = {noneModeStyles._Rectangle_13_2}    >
					</View>
					<View style = {noneModeStyles._layer_b4f666}    >
						<View style = {noneModeStyles._layer_6d89b0}   >
							<Svg style={{height: 35, width: 30}} viewBox = "0 0 30 35">
								<Path fill = {"black"}     d = "M0 0L30 17.5L0 35V0Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Soothing_Waves_2}   >
					Thunderstorm
				</Text>
			</View>
			<View style = {noneModeStyles._MusicBox_3}    >
				<View style = {noneModeStyles._Fresh_Turboscent_1_3}    >
				</View>
				<View style = {noneModeStyles._Music_Icon_3}    >
					<View style = {noneModeStyles._Rectangle_13_3}    >
					</View>
					<View style = {noneModeStyles._layer_3c5a20}    >
						<View style = {noneModeStyles._layer_406db4}   >
							<Svg style={{height: 35, width: 30}} viewBox = "0 0 30 35">
								<Path fill = {"black"}     d = "M0 0L30 17.5L0 35V0Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Soothing_Waves_3}   >
					Peaceful Drizzle
				</Text>
			</View>
			<View style = {noneModeStyles._MusicBox_4}    >
				<View style = {noneModeStyles._Fresh_Turboscent_1_4}    >
				</View>
				<View style = {noneModeStyles._Music_Icon_4}    >
					<View style = {noneModeStyles._Rectangle_13_4}    >
					</View>
					<View style = {noneModeStyles._layer_0509fe}    >
						<View style = {noneModeStyles._layer_b20100}   >
							<Svg style={{height: 35, width: 30}} viewBox = "0 0 30 35">
								<Path fill = {"black"}     d = "M0 0L30 17.5L0 35V0Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Soothing_Waves_4}   >
					Exotic Jungle
				</Text>
			</View>
			<View style = {noneModeStyles._MusicBox_5}    >
				<View style = {noneModeStyles._Fresh_Turboscent_1_5}    >
				</View>
				<View style = {noneModeStyles._Music_Icon_5}    >
					<View style = {noneModeStyles._Rectangle_13_5}    >
					</View>
					<View style = {noneModeStyles._layer_a237d4}    >
						<View style = {noneModeStyles._layer_7fff4d}   >
							<Svg style={{height: 35, width: 30}} viewBox = "0 0 30 35">
								<Path fill = {"black"}     d = "M0 0L30 17.5L0 35V0Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Soothing_Waves_5}   >
					Rolling Waterfall
				</Text>
			</View>
			<View style = {noneModeStyles._MusicBox_6}    >
				<View style = {noneModeStyles._Fresh_Turboscent_1_6}    >
				</View>
				<View style = {noneModeStyles._Music_Icon_6}    >
					<View style = {noneModeStyles._Rectangle_13_6}    >
					</View>
					<View style = {noneModeStyles._layer_97a440}    >
						<View style = {noneModeStyles._layer_e1058c}   >
							<Svg style={{height: 35, width: 30}} viewBox = "0 0 30 35">
								<Path fill = {"black"}     d = "M0 0L30 17.5L0 35V0Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Soothing_Waves_6}   >
					Birds Chirping
				</Text>
			</View>
			<View style = {noneModeStyles._TOP}    >
				<View style = {noneModeStyles._Header_With_Back}    >
					<View style = {noneModeStyles._TOP_2}    >
						<View style = {noneModeStyles._Fresh_Turboscent_1_container}    >
							<View style = {noneModeStyles._Fresh_Turboscent_1_7}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fresh_Turboscent_1_7_link}}/>
							</View>
						</View>
						<Text style = {noneModeStyles._Find_Your_Calm_Place}   >
							Pick a Soundtrack
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
			<View style = {noneModeStyles._Group_8}    >
				<View style = {noneModeStyles._Rectangle_10}    >
				</View>
				<View style = {noneModeStyles._PrimaryButton}    >
					<View style = {noneModeStyles._PrimaryButton_2}    >
					</View>
					<View style = {noneModeStyles._Fresh_Turboscent_1_container_2}    >
						<View style = {noneModeStyles._Fresh_Turboscent_1_8}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fresh_Turboscent_1_8_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Let_s_Begin}   >
						Pick Time
					</Text>
					<View style = {noneModeStyles._layer_488211}    >
						<View style = {noneModeStyles._layer_4a774d}   >
							<Svg style={{height: 34, width: 42}} viewBox = "0 0 42 34">
								<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M23.5 1L41 17L23.5 33M1 17H41H1Z"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Music_Screen

const noneModeStyles = StyleSheet.create({
_page2: {
	height: 1126,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_MusicBox: {
	width: 310,
	height: 100,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 40,
	top: 120,
	},
_Fresh_Turboscent_1: {
	width: 310,
	height: 100,
	backgroundColor: "rgb(113, 171, 184)",
	position: "absolute",
	borderRadius: 20,
	},
_Music_Icon: {
	width: 60,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 20},
	],
	},
_Rectangle_13: {
	width: 60,
	height: 60,
	backgroundColor: "rgb(236, 235, 235)",
	position: "absolute",
	borderRadius: 20,
	},
_layer_a8b126: {
	position: "absolute",
	transform: [
		{translateX: 18},
		{translateY: 12},
	],
	},
_layer_7fc0b8: {
	},
_Soothing_Waves: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 120},
		{translateY: 40},
	],
	color: "rgb(252, 252, 252)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_MusicBox_2: {
	width: 310,
	height: 100,
	position: "absolute",
	left: 40,
	top: 420,
	},
_Fresh_Turboscent_1_2: {
	width: 310,
	height: 100,
	backgroundColor: "rgb(113, 171, 184)",
	position: "absolute",
	borderRadius: 20,
	},
_Music_Icon_2: {
	width: 60,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 20},
	],
	},
_Rectangle_13_2: {
	width: 60,
	height: 60,
	backgroundColor: "rgb(236, 235, 235)",
	position: "absolute",
	borderRadius: 20,
	},
_layer_b4f666: {
	position: "absolute",
	transform: [
		{translateX: 18},
		{translateY: 12},
	],
	},
_layer_6d89b0: {
	},
_Soothing_Waves_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 130},
		{translateY: 40},
	],
	color: "rgb(252, 252, 252)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_MusicBox_3: {
	width: 310,
	height: 100,
	position: "absolute",
	left: 40,
	top: 270,
	},
_Fresh_Turboscent_1_3: {
	width: 310,
	height: 100,
	backgroundColor: "rgb(113, 171, 184)",
	position: "absolute",
	borderRadius: 20,
	},
_Music_Icon_3: {
	width: 60,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 20},
	],
	},
_Rectangle_13_3: {
	width: 60,
	height: 60,
	backgroundColor: "rgb(236, 235, 235)",
	position: "absolute",
	borderRadius: 20,
	},
_layer_3c5a20: {
	position: "absolute",
	transform: [
		{translateX: 18},
		{translateY: 12},
	],
	},
_layer_406db4: {
	},
_Soothing_Waves_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 122},
		{translateY: 40},
	],
	color: "rgb(252, 252, 252)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_MusicBox_4: {
	width: 310,
	height: 100,
	position: "absolute",
	left: 40,
	top: 570,
	},
_Fresh_Turboscent_1_4: {
	width: 310,
	height: 100,
	backgroundColor: "rgb(113, 171, 184)",
	position: "absolute",
	borderRadius: 20,
	},
_Music_Icon_4: {
	width: 60,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 20},
	],
	},
_Rectangle_13_4: {
	width: 60,
	height: 60,
	backgroundColor: "rgb(236, 235, 235)",
	position: "absolute",
	borderRadius: 20,
	},
_layer_0509fe: {
	position: "absolute",
	transform: [
		{translateX: 18},
		{translateY: 12},
	],
	},
_layer_b20100: {
	},
_Soothing_Waves_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 135},
		{translateY: 40},
	],
	color: "rgb(252, 252, 252)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_MusicBox_5: {
	width: 310,
	height: 100,
	position: "absolute",
	left: 40,
	top: 720,
	},
_Fresh_Turboscent_1_5: {
	width: 310,
	height: 100,
	backgroundColor: "rgb(113, 171, 184)",
	position: "absolute",
	borderRadius: 20,
	},
_Music_Icon_5: {
	width: 60,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 20},
	],
	},
_Rectangle_13_5: {
	width: 60,
	height: 60,
	backgroundColor: "rgb(236, 235, 235)",
	position: "absolute",
	borderRadius: 20,
	},
_layer_a237d4: {
	position: "absolute",
	transform: [
		{translateX: 18},
		{translateY: 12},
	],
	},
_layer_7fff4d: {
	},
_Soothing_Waves_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 118},
		{translateY: 40},
	],
	color: "rgb(252, 252, 252)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
	},
_MusicBox_6: {
	width: 310,
	height: 100,
	position: "absolute",
	left: 40,
	top: 870,
	},
_Fresh_Turboscent_1_6: {
	width: 310,
	height: 100,
	backgroundColor: "rgb(113, 171, 184)",
	position: "absolute",
	borderRadius: 20,
	},
_Music_Icon_6: {
	width: 60,
	height: 60,
	position: "absolute",
	transform: [
		{translateX: 24},
		{translateY: 20},
	],
	},
_Rectangle_13_6: {
	width: 60,
	height: 60,
	backgroundColor: "rgb(236, 235, 235)",
	position: "absolute",
	borderRadius: 20,
	},
_layer_97a440: {
	position: "absolute",
	transform: [
		{translateX: 18},
		{translateY: 12},
	],
	},
_layer_e1058c: {
	},
_Soothing_Waves_6: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 130},
		{translateY: 40},
	],
	color: "rgb(252, 252, 252)",
	fontSize: 20,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "center",
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
_Fresh_Turboscent_1_container: {
	width: 392,
	height: 100,
	position: "absolute",
	},
_Fresh_Turboscent_1_7: {
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
_Group_8: {
	width: 375,
	height: 107,
	position: "absolute",
	left: 0,
	top: 740,
	},
_Rectangle_10: {
	width: 375,
	height: 107,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_PrimaryButton: {
	width: 275,
	height: 49,
	position: "absolute",
	left: 50,
	top: 33,
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
_Fresh_Turboscent_1_8: {
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
_layer_488211: {
	position: "absolute",
	transform: [
		{translateX: 203},
		{translateY: 9},
	],
	},
_layer_4a774d: {
	},
})

