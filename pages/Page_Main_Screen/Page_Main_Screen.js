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
const Page_Main_Screen  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page11}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._PrimaryButton}    >
					<View style = {noneModeStyles._PrimaryButton_2}    >
					</View>
					<Text style = {noneModeStyles._Let_s_Begin}   >
						Let’s Begin
					</Text>
					<View style = {noneModeStyles._layer_7dcda8}    >
						<View style = {noneModeStyles._layer_bc0deb}   >
							<Svg style={{height: 34, width: 42}} viewBox = "0 0 42 34">
								<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M23.5 1L41 17L23.5 33M1 17H41H1Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Logo}    >
					<Text style = {noneModeStyles._Sadare}   >
						Sadare
					</Text>
					<View style = {noneModeStyles._twemoji_leaf_fluttering_in_wind}    >
						<View style = {noneModeStyles._layer_3c7bb0}    >
							<View style = {noneModeStyles._layer_4203b0}   >
								<Svg style={{height: 27, width: 34}} viewBox = "0 0 34 27">
									<Path fill = {"#A6D388"}     d = "M4.38215 20.2911C9.40253 25.3115 20.9316 32.2945 34 20.2209C26.6128 18.7999 25.3131 9.40094 20.2917 4.38156C15.2713 -0.639826 8.26627 -1.77508 3.24489 3.2453C-1.7755 8.26569 -0.639241 15.2698 4.38215 20.2911Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_421c40}    >
							<View style = {noneModeStyles._layer_581658}   >
								<Svg style={{height: 28, width: 36}} viewBox = "0 0 36 28">
									<Path fill = {"#77B255"}     d = "M24.6395 23.1327C30.7729 24.7681 35.3069 22.394 35.7253 21.9757C35.7253 21.9757 31.936 23.7282 25.3572 20.4984C26.31 19.2853 29.2146 17.5868 29.2146 17.5868C28.6611 17.2405 25.133 17.3616 22.7238 19.0171C21.4448 18.2007 20.217 17.3066 19.0476 16.3397L19.8883 15.4679C23.1412 12.0809 26.8385 12.8817 26.8385 12.8817C26.1999 12.2681 21.2345 9.43761 17.247 13.5823L16.6335 14.2208C16.1949 13.8109 15.7631 13.3938 15.3383 12.9697L13.4867 11.1181L14.5516 10.0522C17.8756 6.72922 22.7849 6.5981 22.7849 6.5981C22.1583 5.97055 15.9158 3.94676 11.8512 8.01135L11.1146 8.747L2.81526 0.445672C2.18871 -0.181882 1.12177 -0.129837 0.496216 0.495716C-0.130337 1.12227 -0.181382 2.18821 0.445171 2.81476L8.7455 11.1151L8.68645 11.1741C4.62186 15.2397 6.30935 21.8175 6.9369 22.4451C6.9369 22.4451 7.40532 17.1985 10.7293 13.8755L11.1166 13.4872L14.6207 16.9923C14.6777 17.0493 14.7338 17.0984 14.7908 17.1554C12.3637 21.9567 16.0209 27.5046 16.7506 27.949C16.7506 27.949 15.2843 23.2218 17.231 19.3063C18.7583 20.5024 20.2537 21.4032 21.6919 22.0638C21.775 25.0594 24.4013 27.7688 25.0389 28C25.0389 28 24.1271 24.9943 24.5044 23.509L24.6395 23.1327Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._layer_286845}    >
							<View style = {noneModeStyles._layer_f251c6}   >
								<Svg style={{height: 20, width: 15}} viewBox = "0 0 15 20">
									<Path fill = {"#5DADEC"}     d = "M1.04779 9.47862C0.804312 9.47737 0.568784 9.3918 0.381286 9.23646C0.193789 9.08112 0.0659051 8.86562 0.0193949 8.62662C-0.0271154 8.38762 0.0106217 8.13989 0.126184 7.92557C0.241747 7.71126 0.427997 7.54361 0.653241 7.45115C0.827896 7.3796 4.87863 5.66461 5.29949 0.966816C5.31075 0.828402 5.3493 0.693587 5.41292 0.570144C5.47653 0.446702 5.56396 0.337075 5.67015 0.247585C5.77635 0.158096 5.8992 0.0905141 6.03164 0.0487374C6.16408 0.00696074 6.30348 -0.00818434 6.4418 0.00417561C6.58012 0.0165356 6.71463 0.0561559 6.83756 0.120752C6.96049 0.185348 7.06942 0.273642 7.15807 0.380542C7.24671 0.487441 7.31332 0.610832 7.35404 0.743598C7.39476 0.876364 7.4088 1.01588 7.39534 1.1541C6.85665 7.16286 1.66014 9.31343 1.43919 9.40181C1.31498 9.45269 1.18202 9.47879 1.04779 9.47862ZM6.30849 13.6872C6.06065 13.6868 5.82092 13.5989 5.63153 13.439C5.44215 13.2792 5.31527 13.0576 5.27326 12.8134C5.23126 12.5691 5.27682 12.3179 5.40191 12.1039C5.52701 11.89 5.72361 11.7271 5.95707 11.6439C6.15487 11.5724 10.718 9.84371 11.6176 3.02901C11.6344 2.89153 11.6784 2.75879 11.7472 2.63855C11.8159 2.5183 11.9079 2.41297 12.0178 2.32872C12.1278 2.24446 12.2534 2.18297 12.3874 2.14785C12.5213 2.11273 12.661 2.10468 12.7981 2.12417C12.9351 2.14205 13.0672 2.18681 13.1869 2.25586C13.3066 2.32492 13.4115 2.41692 13.4955 2.52659C13.5796 2.63626 13.6412 2.76144 13.6768 2.89496C13.7124 3.02848 13.7212 3.16771 13.7029 3.30467C12.6287 11.4587 6.89768 13.5451 6.65464 13.6293C6.53996 13.6682 6.42317 13.6872 6.30849 13.6872ZM9.46595 20C9.23291 19.9993 9.0067 19.9213 8.82274 19.7782C8.63878 19.6351 8.50747 19.4351 8.44937 19.2094C8.39126 18.9837 8.40965 18.7452 8.50165 18.531C8.59365 18.3169 8.75406 18.1394 8.95777 18.0262C8.98618 18.0104 11.8522 16.4101 12.7465 14.3248C12.8625 14.0777 13.0699 13.8853 13.325 13.7883C13.5801 13.6913 13.863 13.6972 14.1138 13.8048C14.3646 13.9124 14.5638 14.1132 14.6694 14.365C14.7749 14.6167 14.7784 14.8995 14.6793 15.1539C13.4977 17.9105 10.1141 19.7917 9.97098 19.8706C9.81611 19.9553 9.64247 19.9998 9.46595 20Z"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Main_Screen

const noneModeStyles = StyleSheet.create({
_page11: {
	height: 844,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(113, 171, 184)",
	},
_viewport: {
	height: 844,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(113, 171, 184)",
	},
_PrimaryButton: {
	width: 275,
	height: 49,
	position: "absolute",
	left: 50,
	top: 725,
	},
_PrimaryButton_2: {
	width: 275,
	height: 49,
	backgroundColor: "rgb(113, 171, 184)",
	position: "absolute",
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 30,
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
_layer_7dcda8: {
	position: "absolute",
	transform: [
		{translateX: 203},
		{translateY: 9},
	],
	},
_layer_bc0deb: {
	},
_Logo: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgb(196, 196, 196)",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 46,
	top: 97,
	paddingTop: 8,
	paddingRight: 21,
	paddingBottom: 8,
	paddingLeft: 21,
	},
_Sadare: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginRight: 8,
	color: "rgb(255, 255, 255)",
	fontSize: 60,
	fontWeight: "400",
	fontFamily: "NanumGothic",
	letterSpacing: 0,
	textAlign: "left",
	},
_twemoji_leaf_fluttering_in_wind: {
	width: 36,
	height: 36,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
_layer_3c7bb0: {
	position: "absolute",
	transform: [
		{translateX: 2.0314},
		{translateY: 8.31699},
	],
	},
_layer_4203b0: {
	},
_layer_421c40: {
	position: "absolute",
	transform: [
		{translateX: 0.0662231},
		{translateY: 6.69772},
	],
	},
_layer_581658: {
	},
_layer_286845: {
	position: "absolute",
	transform: [
		{translateX: 21.0871},
		{translateY: 0.991096},
	],
	},
_layer_f251c6: {
	},
})

