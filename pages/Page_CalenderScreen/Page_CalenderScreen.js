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
import {image_Shore_1_link} from './assets/imageLinks.js'
import {image_Rectangle_4_link} from './assets/imageLinks.js'
import {image_Fire_Icon_link} from './assets/imageLinks.js'
import {image_Fresh_Turboscent_1_link} from './assets/imageLinks.js'
const Page_CalenderScreen  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<View style = {noneModeStyles._Navbar}    >
				<View style = {noneModeStyles._Rectangle_3}    >
				</View>
				<View style = {noneModeStyles._Shore_1_container}    >
					<View style = {noneModeStyles._Shore_1}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Shore_1_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Calendar_Button}    >
				</View>
				<View style = {noneModeStyles._Profile_Button}    >
					<View style = {noneModeStyles._Rectangle_5}    >
					</View>
				</View>
				<View style = {noneModeStyles._Meditate_Button}    >
					<View style = {noneModeStyles._Larger_Circle_Main_Button}    >
					</View>
					<View style = {noneModeStyles._Group}    >
						<View style = {noneModeStyles.style11}    >
							<View style = {noneModeStyles.style12}   >
								<Svg style={{height: 18, width: 26}} viewBox = "0 0 26 18">
									<Path fill = {"none"}   stroke = {"black"} strokeWidth = {1.5} d = "M11.6782 0.772143L14.1272 5.83576C14.1272 5.83576 25.1362 8.0835 25.1362 13.4298C25.1362 17.2282 20.2382 17.2282 20.2382 17.2282H7.19416L0.772017 13.7976"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style13}    >
							<View style = {noneModeStyles.style14}   >
								<Svg style={{height: 18, width: 26}} viewBox = "0 0 26 18">
									<Path fill = {"none"}   stroke = {"black"} strokeWidth = {1.5} d = "M13.8976 0.754114L11.5086 5.6995C11.5086 5.6995 0.753869 7.89476 0.753869 13.1162C0.753869 16.8259 5.53746 16.8259 5.53746 16.8259H11.3079L17.5801 13.4754L25.2461 8.78466"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style15}    >
							<View style = {noneModeStyles.style16}   >
								<Svg style={{height: 36, width: 52}} viewBox = "0 0 52 36">
									<Path fill = {"none"}   stroke = {"black"} strokeWidth = {1.5} d = "M0.750641 35.2495C0.750641 35.2495 6.69898 34.0191 10.2685 32.7887C13.8353 15.5526 24.5384 16.783 25.732 16.783C26.9228 16.783 37.6287 15.5526 41.1954 32.7887C44.765 34.0164 50.7133 35.2495 50.7133 35.2495H0.750641ZM25.732 11.4264C27.2043 11.4264 28.6163 10.864 29.6574 9.863C30.6985 8.86195 31.2834 7.50423 31.2834 6.08854C31.2834 4.67284 30.6985 3.31512 29.6574 2.31407C28.6163 1.31302 27.2043 0.750641 25.732 0.750641C24.2597 0.750641 22.8476 1.31302 21.8066 2.31407C20.7655 3.31512 20.1806 4.67284 20.1806 6.08854C20.1806 7.50423 20.7655 8.86195 21.8066 9.863C22.8476 10.864 24.2597 11.4264 25.732 11.4264Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._codicon_account}    >
					<View style = {noneModeStyles.style18}    >
						<View style = {noneModeStyles.style19}   >
							<Svg style={{height: 70, width: 70}} viewBox = "0 0 70 70">
								<Path fill = {"black"}     d = "M70 34.965C70 15.6625 54.32 0 35 0C15.68 0 0 15.6625 0 34.965C0 45.5963 4.83 55.1775 12.39 61.6087C12.46 61.6787 12.53 61.6788 12.53 61.7488C13.16 62.2388 13.79 62.7287 14.49 63.2188C14.84 63.4287 15.12 63.7044 15.47 63.9844C21.254 67.906 28.0819 70.0016 35.07 70C42.0581 70.0016 48.886 67.906 54.67 63.9844C55.02 63.7744 55.3 63.4987 55.65 63.2844C56.28 62.7988 56.98 62.3088 57.61 61.8188C57.68 61.7487 57.75 61.7487 57.75 61.6787C65.17 55.1731 70 45.5963 70 34.965ZM35 65.5944C28.42 65.5944 22.4 63.4944 17.43 59.9987C17.5 59.4387 17.64 58.8831 17.78 58.3231C18.1971 56.8055 18.8088 55.3481 19.6 53.9875C20.37 52.6575 21.28 51.4675 22.4 50.4175C23.45 49.3675 24.71 48.3919 25.97 47.6219C27.3 46.8519 28.7 46.2919 30.24 45.8719C31.792 45.4536 33.3926 45.2432 35 45.2463C39.7716 45.2125 44.3679 47.0428 47.81 50.3475C49.42 51.9575 50.68 53.8475 51.59 56.0131C52.08 57.2731 52.43 58.6031 52.64 59.9987C47.4739 63.6307 41.315 65.5844 35 65.5944ZM24.29 33.2194C23.6732 31.8072 23.3631 30.2803 23.38 28.7394C23.38 27.2037 23.66 25.6637 24.29 24.2638C24.92 22.8638 25.76 21.6081 26.81 20.5581C27.86 19.5081 29.12 18.6725 30.52 18.0425C31.92 17.4125 33.46 17.1325 35 17.1325C36.61 17.1325 38.08 17.4125 39.48 18.0425C40.88 18.6725 42.14 19.5125 43.19 20.5581C44.24 21.6081 45.08 22.8681 45.71 24.2638C46.34 25.6637 46.62 27.2037 46.62 28.7394C46.62 30.3494 46.34 31.8194 45.71 33.215C45.102 34.5943 44.2481 35.8514 43.19 36.925C42.1161 37.9815 40.8589 38.8339 39.48 39.4406C36.5874 40.6294 33.3426 40.6294 30.45 39.4406C29.0711 38.8339 27.8139 37.9815 26.74 36.925C25.6804 35.8671 24.8469 34.6049 24.29 33.215V33.2194ZM56.77 56.4331C56.77 56.2931 56.7 56.2231 56.7 56.0831C56.0115 53.8931 54.9968 51.8193 53.69 49.9319C52.382 48.0304 50.7745 46.3535 48.93 44.9662C47.5214 43.9065 45.9945 43.0139 44.38 42.3063C45.1145 41.8217 45.795 41.26 46.41 40.6306C47.4536 39.6003 48.3701 38.4488 49.14 37.2006C50.6903 34.6535 51.491 31.7209 51.45 28.7394C51.4716 26.5323 51.0429 24.3439 50.19 22.3081C49.3479 20.3465 48.1358 18.5656 46.62 17.0625C45.1064 15.5751 43.3251 14.3876 41.37 13.5625C39.3308 12.7111 37.1396 12.2839 34.93 12.3069C32.7201 12.2853 30.5289 12.714 28.49 13.5669C26.518 14.3902 24.7324 15.6029 23.24 17.1325C21.7527 18.6444 20.5651 20.4243 19.74 22.3781C18.8871 24.4139 18.4583 26.6023 18.48 28.8094C18.48 30.3494 18.69 31.8194 19.11 33.215C19.53 34.685 20.09 36.015 20.86 37.2706C21.56 38.5306 22.54 39.6506 23.59 40.7006C24.22 41.3306 24.92 41.8862 25.69 42.3763C24.0705 43.1028 22.5431 44.0192 21.14 45.1063C19.32 46.5063 17.71 48.1819 16.38 50.0019C15.0599 51.8815 14.0441 53.9574 13.37 56.1531C13.3 56.2931 13.3 56.4331 13.3 56.5031C7.77 50.9075 4.34 43.3563 4.34 34.965C4.34 18.1125 18.13 4.33563 35 4.33563C51.87 4.33563 65.66 18.1125 65.66 34.965C65.6508 43.0148 62.4545 50.7335 56.77 56.4331Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Calendar_Button_2}    >
					<View style = {noneModeStyles._Rectangle_4_container}    >
						<View style = {noneModeStyles._Rectangle_4}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_4_link}}/>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Calendar}    >
				<View style = {noneModeStyles._Days}    >
					<View style = {noneModeStyles._Row}    >
						<View style = {noneModeStyles._Weekday}    >
							<Text style = {noneModeStyles._Mo}   >
								Mo
							</Text>
						</View>
						<View style = {noneModeStyles._Weekday_2}    >
							<Text style = {noneModeStyles._Tu}   >
								Tu
							</Text>
						</View>
						<View style = {noneModeStyles._Weekday_3}    >
							<Text style = {noneModeStyles._We}   >
								We
							</Text>
						</View>
						<View style = {noneModeStyles._Weekday_4}    >
							<Text style = {noneModeStyles._Th}   >
								Th
							</Text>
						</View>
						<View style = {noneModeStyles._Weekday_5}    >
							<Text style = {noneModeStyles._Fr}   >
								Fr
							</Text>
						</View>
						<View style = {noneModeStyles._Weekday_6}    >
							<Text style = {noneModeStyles._Sa}   >
								Sa
							</Text>
						</View>
						<View style = {noneModeStyles._Weekday_7}    >
							<Text style = {noneModeStyles._Su}   >
								Su
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Row_2}    >
						<View style = {noneModeStyles._Date_Default}    >
							<Text style = {noneModeStyles._1}   >
								1
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_2}    >
							<Text style = {noneModeStyles._2}   >
								2
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_3}    >
							<Text style = {noneModeStyles._3}   >
								3
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_4}    >
							<Text style = {noneModeStyles._4}   >
								4
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_5}    >
							<Text style = {noneModeStyles._5}   >
								5
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_6}    >
							<Text style = {noneModeStyles._6}   >
								6
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_7}    >
							<Text style = {noneModeStyles._7}   >
								7
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Row_3}    >
						<View style = {noneModeStyles._Date_Default_8}    >
							<Text style = {noneModeStyles._8}   >
								8
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_9}    >
							<Text style = {noneModeStyles._9}   >
								9
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_10}    >
							<Text style = {noneModeStyles._10}   >
								10
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_11}    >
							<Text style = {noneModeStyles._11}   >
								11
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_12}    >
							<Text style = {noneModeStyles._12}   >
								12
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_13}    >
							<Text style = {noneModeStyles._13}   >
								13
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_14}    >
							<Text style = {noneModeStyles._14}   >
								14
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Row_4}    >
						<View style = {noneModeStyles._Date_Default_15}    >
							<Text style = {noneModeStyles._15}   >
								15
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_16}    >
							<Text style = {noneModeStyles._16}   >
								16
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_17}    >
							<Text style = {noneModeStyles._17}   >
								17
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Active}    >
							<Text style = {noneModeStyles._18}   >
								18
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_18}    >
							<Text style = {noneModeStyles._19}   >
								19
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_19}    >
							<Text style = {noneModeStyles._20}   >
								20
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_20}    >
							<Text style = {noneModeStyles._21}   >
								21
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Row_5}    >
						<View style = {noneModeStyles._Date_Default_21}    >
							<Text style = {noneModeStyles._22}   >
								22
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_22}    >
							<Text style = {noneModeStyles._23}   >
								23
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_23}    >
							<Text style = {noneModeStyles._24}   >
								24
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_24}    >
							<Text style = {noneModeStyles._25}   >
								25
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_25}    >
							<Text style = {noneModeStyles._26}   >
								26
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_26}    >
							<Text style = {noneModeStyles._27}   >
								27
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_27}    >
							<Text style = {noneModeStyles._28}   >
								28
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Row_6}    >
						<View style = {noneModeStyles._Date_Default_28}    >
							<Text style = {noneModeStyles._29}   >
								29
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Default_29}    >
							<Text style = {noneModeStyles._30}   >
								30
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Inactive}    >
							<Text style = {noneModeStyles._1_2}   >
								1
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Inactive_2}    >
							<Text style = {noneModeStyles._2_2}   >
								2
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Inactive_3}    >
							<Text style = {noneModeStyles._3_2}   >
								3
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Inactive_4}    >
							<Text style = {noneModeStyles._4_2}   >
								4
							</Text>
						</View>
						<View style = {noneModeStyles._Date_Inactive_5}    >
							<Text style = {noneModeStyles._5_2}   >
								5
							</Text>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Header}    >
					<Text style = {noneModeStyles._March_2022}   >
						March 2022
					</Text>
					<View style = {noneModeStyles._Group_7}    >
						<View style = {noneModeStyles._icon___chevron_right}    >
							<View style = {noneModeStyles.style119}    >
								<View style = {noneModeStyles.style120}   >
									<Svg style={{height: 15, width: 9}} viewBox = "0 0 9 15">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M1.47169 15L-6.43296e-08 13.5283L6.02833 7.49998L-5.91343e-07 1.47166L1.47169 -2.98373e-05L8.9717 7.49998L1.47169 15Z"/>
									</Svg>
								</View>
							</View>
						</View>
						<View style = {noneModeStyles._icon___chevron_left}    >
							<View style = {noneModeStyles.style122}    >
								<View style = {noneModeStyles.style123}   >
									<Svg style={{height: 15, width: 9}} viewBox = "0 0 9 15">
										<Path fill = {"black"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M7.50003 1.75497e-08L8.97172 1.47169L2.9434 7.50001L8.97172 13.5283L7.50003 15L1.79532e-05 7.50001L7.50003 1.75497e-08Z"/>
									</Svg>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Streak_Component}    >
				<View style = {noneModeStyles._Fire_Background_Rectangle}    >
				</View>
				<View style = {noneModeStyles._Fire_Icon_container}    >
					<View style = {noneModeStyles._Fire_Icon}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fire_Icon_link}}/>
					</View>
				</View>
				<Text style = {noneModeStyles._48_Days}   >
					48{'\n'}Days
				</Text>
			</View>
			<View style = {noneModeStyles._Header_With_Back}    >
				<View style = {noneModeStyles._TOP}    >
					<View style = {noneModeStyles._Fresh_Turboscent_1_container}    >
						<View style = {noneModeStyles._Fresh_Turboscent_1}   >
							<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Fresh_Turboscent_1_link}}/>
						</View>
					</View>
					<Text style = {noneModeStyles._Find_Your_Calm_Place}   >
						See Your Calender
					</Text>
				</View>
				<View style = {noneModeStyles._Back_Button}    >
					<View style = {noneModeStyles._Rectangle_14}    >
					</View>
					<View style = {noneModeStyles.____Back}    >
						<Text style = {noneModeStyles.____Back_2}   >
						</Text>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_CalenderScreen

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 844,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Navbar: {
	width: 390,
	height: 141,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 0,
	top: 703,
	borderRadius: 15,
	},
_Rectangle_3: {
	width: 390,
	height: 104,
	backgroundColor: "rgb(154, 238, 208)",
	position: "absolute",
	transform: [
		{translateY: 37},
	],
	},
_Shore_1_container: {
	width: 390,
	height: 103,
	position: "absolute",
	transform: [
		{translateY: 38},
	],
	},
_Shore_1: {
	width: "100%",
	height: "100%",
	},
_Calendar_Button: {
	width: 132.08,
	height: 104,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateY: 37},
	],
	},
_Profile_Button: {
	width: 132.08,
	height: 104,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 257.92},
		{translateY: 37},
	],
	},
_Rectangle_5: {
	width: 132.08,
	height: 104,
	backgroundColor: "rgb(62, 177, 177)",
	position: "absolute",
	},
_Meditate_Button: {
	width: 124.8,
	height: 116,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 132.08},
	],
	},
_Larger_Circle_Main_Button: {
	width: 124.8,
	height: 116,
	position: "absolute",
	borderTopWidth: 5,
	borderRightWidth: 5,
	borderBottomWidth: 5,
	borderLeftWidth: 5,
	borderStyle: "solid",
	borderColor: "rgb(178, 200, 255)",
	},
_Group: {
	width: 49.92,
	height: 48,
	position: "absolute",
	transform: [
		{translateX: 37.4401},
		{translateY: 34},
	],
	},
style11: {
	position: "absolute",
	transform: [
		{translateX: 21.4934},
		{translateY: 32.0107},
	],
	},
style12: {
	},
style13: {
	position: "absolute",
	transform: [
		{translateX: 4.75354},
		{translateY: 32.0107},
	],
	},
style14: {
	},
style15: {
	position: "absolute",
	},
style16: {
	},
_codicon_account: {
	width: 70,
	height: 70,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: 289},
		{translateY: 54},
	],
	},
style18: {
	position: "absolute",
	},
style19: {
	},
_Calendar_Button_2: {
	width: 120,
	height: 120,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	transform: [
		{translateX: -2},
		{translateY: 34},
	],
	},
_Rectangle_4_container: {
	width: 120,
	height: 120,
	position: "absolute",
	},
_Rectangle_4: {
	width: "100%",
	height: "100%",
	},
_Calendar: {
	width: 280,
	height: 286,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 55,
	top: 279,
	},
_Days: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	position: "absolute",
	left: 0,
	top: 46,
	},
_Row: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_Weekday: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderRadius: 40,
	},
_Mo: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Weekday_2: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderRadius: 40,
	},
_Tu: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Weekday_3: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderRadius: 40,
	},
_We: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Weekday_4: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderRadius: 40,
	},
_Th: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Weekday_5: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderRadius: 40,
	},
_Fr: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Weekday_6: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderRadius: 40,
	},
_Sa: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Weekday_7: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderRadius: 40,
	},
_Su: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Row_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_Date_Default: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_1: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_2: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_2: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_3: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_3: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_4: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_4: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_5: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_5: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_6: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_6: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_7: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_7: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Row_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_Date_Default_8: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_8: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_9: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_9: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_10: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_10: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_11: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_11: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_12: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_12: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_13: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_13: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_14: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_14: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Row_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_Date_Default_15: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_15: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_16: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_16: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_17: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_17: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Active: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(53, 71, 233)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_18: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_18: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_19: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_19: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_20: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_20: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_21: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Row_5: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_Date_Default_21: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_22: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_22: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_23: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_23: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_24: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_24: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_25: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_25: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_26: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_26: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_27: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_27: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_28: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Row_6: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(255, 255, 255, 0)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexShrink: 0,
	},
_Date_Default_28: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_29: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Default_29: {
	width: "auto",
	height: "auto",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_30: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Inactive: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(252, 252, 252)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_1_2: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(116, 116, 116)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Inactive_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(252, 252, 252)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_2_2: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(116, 116, 116)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Inactive_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(252, 252, 252)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_3_2: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(116, 116, 116)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Inactive_4: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(252, 252, 252)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_4_2: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(116, 116, 116)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Date_Inactive_5: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(252, 252, 252)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(223, 223, 223)",
	borderRadius: 40,
	},
_5_2: {
	width: 20,
	height: 20,
	flexShrink: 0,
	color: "rgb(116, 116, 116)",
	fontSize: 12,
	fontWeight: "400",
	lineHeight: 14.0625,
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
	},
_Header: {
	width: 280,
	height: 22,
	position: "absolute",
	left: 0,
	top: 0,
	},
_March_2022: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "700",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "left",
	},
_Group_7: {
	width: 40,
	height: 16,
	position: "absolute",
	left: 240,
	top: 3,
	},
_icon___chevron_right: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 0,
	right: 0,
	},
style119: {
	position: "absolute",
	transform: [
		{translateX: 4.04285},
		{translateY: 0.542969},
	],
	},
style120: {
	},
_icon___chevron_left: {
	width: 16,
	height: 16,
	backgroundColor: "rgba(0, 0, 0, 0)",
	position: "absolute",
	top: 0,
	right: 24,
	},
style122: {
	position: "absolute",
	transform: [
		{translateX: 3.33582},
		{translateY: 0.542847},
	],
	},
style123: {
	},
_Streak_Component: {
	width: 375,
	height: 137,
	backgroundColor: "rgba(255, 255, 255, 0)",
	position: "absolute",
	left: 8,
	top: 105,
	},
_Fire_Background_Rectangle: {
	width: 375,
	height: 137,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	},
_Fire_Icon_container: {
	width: 70,
	height: 99,
	position: "absolute",
	transform: [
		{translateX: 64},
		{translateY: 16},
	],
	},
_Fire_Icon: {
	width: "100%",
	height: "100%",
	},
_48_Days: {
	width: "auto",
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 218},
		{translateY: 8},
	],
	color: "rgb(0, 0, 0)",
	fontSize: 48,
	fontWeight: "700",
	fontFamily: "Inter",
	letterSpacing: 0,
	textAlign: "center",
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

