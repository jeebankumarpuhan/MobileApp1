import React, { Component } from 'react'
import { BackHandler, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { common_color, HEIGHT } from '../../lib/Constants'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';



export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            checked: true,
            visible: true,
            regdId: '',
            password: ''
        }
    }
    render() {
        return (
            <ScrollView style={{ height: HEIGHT }}>
                <ImageBackground source={require('../../images/bg.jpg')} resizeMode={'cover'} imageStyle={{ opacity: 0.8 }} style={{ height: HEIGHT }}>
                    <StatusBar backgroundColor={common_color} />
                    <View style={{ height: "40%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <View style={{ height: "85%", width: "70%" }}>
                            <Image source={require('../../images/logo.png')} style={{ height: "100%", width: "100%", marginTop: "100px" }} />
                        </View>
                        {/* <View>
                            <Text style={{ fontSize: 30, fontFamily: "Gill Sans", fontWeight: "800", color: common_color }}>Food App</Text>
                            <Text style={{ fontWeight: "800", color: "black", fontSize: 12, textAlign: "center" }}>Order Favorite Food</Text>
                        </View> */}
                    </View>
                    <View style={{ height: "60%", display: "flex", justifyContent: "space-evenly" }}>
                        <View style={styles.signInBox}>
                            <View style={{ height: "27%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ fontSize: 23, fontFamily: "Gill Sans", fontWeight: "800", color: "#000" }}>Sign In</Text>
                            </View>
                            <View style={{ height: "45%" }}>
                                <View style={styles.textInputBox} >
                                    <FontAwesome name="users" size={20} color="white" />
                                    <TextInput placeholder='Registration Id' placeholderTextColor="white" style={{ paddingLeft: 15, width: "100%", color: "white" }} onChangeText={(text) =>
                                        this.setState({ regdId: text })
                                    } ></TextInput>
                                </View>
                                <View style={{ ...styles.textInputBox, justifyContent: "space-between" }} >
                                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <Entypo name="lock" size={22} color="white" />
                                        <TextInput placeholder='Password' placeholderTextColor="white" secureTextEntry={this.state.visible} style={{ paddingLeft: 15, width: "80%", color: "white" }} onChangeText={(text) => this.setState({ password: text })} ></TextInput>
                                    </View>
                                    <TouchableOpacity onPress={() => this.setState({ visible: !this.state.visible })} style={{ width: "10%" }}>
                                        {
                                            this.state.visible ?
                                                <Entypo name="eye" size={22} color="white" />
                                                :
                                                <Entypo name="eye-with-line" size={22} color="white" />
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")} >
                                <LinearGradient colors={[common_color, '#0aa66b']} style={styles.linearGradient} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
                                    <Text style={styles.buttonText}>
                                        LOGIN
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "row", marginTop: 12, alignSelf: "center" }}>
                                <Text style={{ fontSize: 13, marginTop: 2, color: "white" }}>
                                    Don't have an Account ?
                                </Text>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                                    <Text style={{ fontSize: 15, fontWeight: "700", color: "white", marginLeft: 5 }}>
                                        Sign Up
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    textInputBox: { backgroundColor: "#32356a", width: "85%", alignSelf: "center", marginBottom: 20, borderRadius: 7, paddingHorizontal: 15, display: "flex", flexDirection: "row", alignItems: "center", color: "white" },
    linearGradient: {
        width: "80%", alignSelf: "center", height: 50, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#fff',
        fontWeight: "bold"
    },
    signInBox: { height: "55%", paddingVertical: 15, backgroundColor: '#f6fcf5', width: "80%", borderRadius: 20, alignSelf: "center", },
    keepMeSignedIn: { width: "80%", alignSelf: "center", display: "flex", alignItems: "center", flexDirection: "row", marginTop: 35 },
    loginButton: { height: "30%", display: "flex", justifyContent: "center", backgroundColor: '#f6fcf5', width: "80%", borderRadius: 20, alignSelf: "center", }
})