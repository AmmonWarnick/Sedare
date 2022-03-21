import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_Meditation_Screen from "./pages/Page_Meditation_Screen/Page_Meditation_Screen.js";
import Page_Logo from "./pages/Page_Logo/Page_Logo.js";
import Page_Music_Screen from "./pages/Page_Music_Screen/Page_Music_Screen.js";
import Page_fluent_music_note_2_20_filled from "./pages/Page_fluent_music_note_2_20_filled/Page_fluent_music_note_2_20_filled.js";
import Page_Mood_Sceren from "./pages/Page_Mood_Sceren/Page_Mood_Sceren.js";
import Page_Meditation_Screen_Animate_5 from "./pages/Page_Meditation_Screen_Animate_5/Page_Meditation_Screen_Animate_5.js";
import Page_CalenderScreen from "./pages/Page_CalenderScreen/Page_CalenderScreen.js";
import Page_Meditation_Screen_Animate4 from "./pages/Page_Meditation_Screen_Animate4/Page_Meditation_Screen_Animate4.js";
import Page_Meditation_Screen_Animate_2 from "./pages/Page_Meditation_Screen_Animate_2/Page_Meditation_Screen_Animate_2.js";
import Page_Meditation_Screen_Animate_1 from "./pages/Page_Meditation_Screen_Animate_1/Page_Meditation_Screen_Animate_1.js";
import Page_Info_Screen from "./pages/Page_Info_Screen/Page_Info_Screen.js";
import Page_Main_Screen from "./pages/Page_Main_Screen/Page_Main_Screen.js";
import Page_Account_Screen from "./pages/Page_Account_Screen/Page_Account_Screen.js";
import Page_Meditation_Screen_Animate_3 from "./pages/Page_Meditation_Screen_Animate_3/Page_Meditation_Screen_Animate_3.js";
const Tab = createBottomTabNavigator();
const Page_Meditation_ScreenStackNavigator = createStackNavigator();
const ScreenForPage_Meditation_Screen = () => {
	return (
		<Page_Meditation_ScreenStackNavigator.Navigator>
			<Page_Meditation_ScreenStackNavigator.Screen
				name = "Page_Meditation_Screen"
				component = {Page_Meditation_Screen}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Meditation_ScreenStackNavigator.Navigator>
	)
};
const Page_LogoStackNavigator = createStackNavigator();
const ScreenForPage_Logo = () => {
	return (
		<Page_LogoStackNavigator.Navigator>
			<Page_LogoStackNavigator.Screen
				name = "Page_Logo"
				component = {Page_Logo}
				options = {{
					headerShown: false
				}}
			/>
		</Page_LogoStackNavigator.Navigator>
	)
};
const Page_Music_ScreenStackNavigator = createStackNavigator();
const ScreenForPage_Music_Screen = () => {
	return (
		<Page_Music_ScreenStackNavigator.Navigator>
			<Page_Music_ScreenStackNavigator.Screen
				name = "Page_Music_Screen"
				component = {Page_Music_Screen}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Music_ScreenStackNavigator.Navigator>
	)
};
const Page_fluent_music_note_2_20_filledStackNavigator = createStackNavigator();
const ScreenForPage_fluent_music_note_2_20_filled = () => {
	return (
		<Page_fluent_music_note_2_20_filledStackNavigator.Navigator>
			<Page_fluent_music_note_2_20_filledStackNavigator.Screen
				name = "Page_fluent_music_note_2_20_filled"
				component = {Page_fluent_music_note_2_20_filled}
				options = {{
					headerShown: false
				}}
			/>
		</Page_fluent_music_note_2_20_filledStackNavigator.Navigator>
	)
};
const Page_Mood_ScerenStackNavigator = createStackNavigator();
const ScreenForPage_Mood_Sceren = () => {
	return (
		<Page_Mood_ScerenStackNavigator.Navigator>
			<Page_Mood_ScerenStackNavigator.Screen
				name = "Page_Mood_Sceren"
				component = {Page_Mood_Sceren}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Mood_ScerenStackNavigator.Navigator>
	)
};
const Page_Meditation_Screen_Animate_5StackNavigator = createStackNavigator();
const ScreenForPage_Meditation_Screen_Animate_5 = () => {
	return (
		<Page_Meditation_Screen_Animate_5StackNavigator.Navigator>
			<Page_Meditation_Screen_Animate_5StackNavigator.Screen
				name = "Page_Meditation_Screen_Animate_5"
				component = {Page_Meditation_Screen_Animate_5}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Meditation_Screen_Animate_5StackNavigator.Navigator>
	)
};
const Page_CalenderScreenStackNavigator = createStackNavigator();
const ScreenForPage_CalenderScreen = () => {
	return (
		<Page_CalenderScreenStackNavigator.Navigator>
			<Page_CalenderScreenStackNavigator.Screen
				name = "Page_CalenderScreen"
				component = {Page_CalenderScreen}
				options = {{
					headerShown: false
				}}
			/>
		</Page_CalenderScreenStackNavigator.Navigator>
	)
};
const Page_Meditation_Screen_Animate4StackNavigator = createStackNavigator();
const ScreenForPage_Meditation_Screen_Animate4 = () => {
	return (
		<Page_Meditation_Screen_Animate4StackNavigator.Navigator>
			<Page_Meditation_Screen_Animate4StackNavigator.Screen
				name = "Page_Meditation_Screen_Animate4"
				component = {Page_Meditation_Screen_Animate4}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Meditation_Screen_Animate4StackNavigator.Navigator>
	)
};
const Page_Meditation_Screen_Animate_2StackNavigator = createStackNavigator();
const ScreenForPage_Meditation_Screen_Animate_2 = () => {
	return (
		<Page_Meditation_Screen_Animate_2StackNavigator.Navigator>
			<Page_Meditation_Screen_Animate_2StackNavigator.Screen
				name = "Page_Meditation_Screen_Animate_2"
				component = {Page_Meditation_Screen_Animate_2}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Meditation_Screen_Animate_2StackNavigator.Navigator>
	)
};
const Page_Meditation_Screen_Animate_1StackNavigator = createStackNavigator();
const ScreenForPage_Meditation_Screen_Animate_1 = () => {
	return (
		<Page_Meditation_Screen_Animate_1StackNavigator.Navigator>
			<Page_Meditation_Screen_Animate_1StackNavigator.Screen
				name = "Page_Meditation_Screen_Animate_1"
				component = {Page_Meditation_Screen_Animate_1}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Meditation_Screen_Animate_1StackNavigator.Navigator>
	)
};
const Page_Info_ScreenStackNavigator = createStackNavigator();
const ScreenForPage_Info_Screen = () => {
	return (
		<Page_Info_ScreenStackNavigator.Navigator>
			<Page_Info_ScreenStackNavigator.Screen
				name = "Page_Info_Screen"
				component = {Page_Info_Screen}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Info_ScreenStackNavigator.Navigator>
	)
};
const Page_Main_ScreenStackNavigator = createStackNavigator();
const ScreenForPage_Main_Screen = () => {
	return (
		<Page_Main_ScreenStackNavigator.Navigator>
			<Page_Main_ScreenStackNavigator.Screen
				name = "Page_Main_Screen"
				component = {Page_Main_Screen}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Main_ScreenStackNavigator.Navigator>
	)
};
const Page_Account_ScreenStackNavigator = createStackNavigator();
const ScreenForPage_Account_Screen = () => {
	return (
		<Page_Account_ScreenStackNavigator.Navigator>
			<Page_Account_ScreenStackNavigator.Screen
				name = "Page_Account_Screen"
				component = {Page_Account_Screen}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Account_ScreenStackNavigator.Navigator>
	)
};
const Page_Meditation_Screen_Animate_3StackNavigator = createStackNavigator();
const ScreenForPage_Meditation_Screen_Animate_3 = () => {
	return (
		<Page_Meditation_Screen_Animate_3StackNavigator.Navigator>
			<Page_Meditation_Screen_Animate_3StackNavigator.Screen
				name = "Page_Meditation_Screen_Animate_3"
				component = {Page_Meditation_Screen_Animate_3}
				options = {{
					headerShown: false
				}}
			/>
		</Page_Meditation_Screen_Animate_3StackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	const [isPage7Open, setIsPage7Open] = useState(false)
	const zIndexPage7 = useRef(2)
	const [isPage8Open, setIsPage8Open] = useState(false)
	const zIndexPage8 = useRef(2)
	const [isPage9Open, setIsPage9Open] = useState(false)
	const zIndexPage9 = useRef(2)
	const [isPage10Open, setIsPage10Open] = useState(false)
	const zIndexPage10 = useRef(2)
	const [isPage11Open, setIsPage11Open] = useState(false)
	const zIndexPage11 = useRef(2)
	const [isPage12Open, setIsPage12Open] = useState(false)
	const zIndexPage12 = useRef(2)
	const [isPage13Open, setIsPage13Open] = useState(false)
	const zIndexPage13 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_Meditation_Screen"
							component = {ScreenForPage_Meditation_Screen}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Logo"
							component = {ScreenForPage_Logo}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Music_Screen"
							component = {ScreenForPage_Music_Screen}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_fluent_music_note_2_20_filled"
							component = {ScreenForPage_fluent_music_note_2_20_filled}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Mood_Sceren"
							component = {ScreenForPage_Mood_Sceren}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Meditation_Screen_Animate_5"
							component = {ScreenForPage_Meditation_Screen_Animate_5}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_CalenderScreen"
							component = {ScreenForPage_CalenderScreen}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Meditation_Screen_Animate4"
							component = {ScreenForPage_Meditation_Screen_Animate4}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Meditation_Screen_Animate_2"
							component = {ScreenForPage_Meditation_Screen_Animate_2}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Meditation_Screen_Animate_1"
							component = {ScreenForPage_Meditation_Screen_Animate_1}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Info_Screen"
							component = {ScreenForPage_Info_Screen}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Main_Screen"
							component = {ScreenForPage_Main_Screen}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Account_Screen"
							component = {ScreenForPage_Account_Screen}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_Meditation_Screen_Animate_3"
							component = {ScreenForPage_Meditation_Screen_Animate_3}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

