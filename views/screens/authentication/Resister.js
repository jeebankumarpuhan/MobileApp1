import React, { Component } from 'react'
import { Alert, Animated, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { common_color, HEIGHT } from '../../lib/Constants'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

export default class Resister extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      regdId: '',
      ipassword: '',
      cpassword: '',
      email: '',
      phone: "",
      animationValue: new Animated.Value(0), // Initialize animated value in state
    };
  }
  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.state.animationValue, {
          toValue: 1,
          duration: 1000, // Animation duration in milliseconds
          useNativeDriver: false,
        }),
        Animated.timing(this.state.animationValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
      { iterations: -1 } // -1 means loop indefinitely
    ).start();
  };
  onSubmit = () => {
    const { regdId, ipassword, cpassword, email, phone } = this.state;
    if (ipassword !== cpassword) {
      Alert.alert("your password dosen't matched")
    }

  }
  render() {
    const borderRadius = this.state.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 0], // Change this value to adjust the border radius animation
    });

    return (
      <ScrollView style={{ height: HEIGHT }}>
        <ImageBackground source={require('../../images/bg.jpg')} resizeMode={'cover'} imageStyle={{ opacity: 0.8 }} style={{ height: HEIGHT }}>
          <StatusBar backgroundColor={common_color} />
          <View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "30%" }}>
            <View style={{ height: "85%", width: "100%" }}>
              <Image source={require('../../images/register.png')} style={{ height: "100%", width: "100%", marginTop: 10, zIndex: 100 }} />

            </View>

          </View>
          <View style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70%" }}>

            <Animated.View
              style={[
                {
                  height: '80%',
                  width: '80%',
                  backgroundColor: 'white',
                  borderColor: '#32356a',
                  borderWidth: 2,
                  // Apply the animated border radius here
                  borderTopLeftRadius: borderRadius,
                  borderBottomRightRadius: borderRadius,
                },
              ]}
            >
              <View style={{ height: "10%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 23, fontFamily: "Gill Sans", fontWeight: "800", color: "#000" }}>Sign Up</Text>
              </View>
              <View style={{ height: "45%" }}>
                <View style={styles.textInputBox} >
                  <FontAwesome name="user" size={20} color="black" />
                  <TextInput placeholder='Enter Your Name' placeholderTextColor="black" style={{ paddingLeft: 15, width: "100%", color: "black" }} onChangeText={(text) =>
                    this.setState({ regdId: text })
                  } ></TextInput>
                </View>
                <View style={styles.textInputBox} >
                  <AntDesign name="mail" size={20} color="black" />
                  <TextInput keyboardType="email-address" placeholder='Enter Your Email' placeholderTextColor="black" style={{ paddingLeft: 15, width: "100%", color: "black" }} onChangeText={(text) =>
                    this.setState({ email: text })
                  } ></TextInput>
                </View>
                <View style={styles.textInputBox} >
                  <FontAwesome name="phone" size={20} color="black" />
                  <TextInput keyboardType='number-pad' placeholder='Enter Your Number' placeholderTextColor="black" style={{ paddingLeft: 15, width: "100%", color: "black" }} onChangeText={(text) =>
                    this.setState({ phone: text })
                  } ></TextInput>
                </View>

                <View style={{ ...styles.textInputBox, justifyContent: "space-between" }} >
                  <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Entypo name="lock" size={22} color="black" />
                    <TextInput placeholder='Enter your Password' placeholderTextColor="black" secureTextEntry={this.state.visible} style={{ paddingLeft: 15, width: "80%", color: "black" }} onChangeText={(text) => this.setState({ ipassword: text })} ></TextInput>
                  </View>
                  <TouchableOpacity onPress={() => this.setState({ visible: !this.state.visible })} style={{ width: "10%" }}>
                    {
                      this.state.visible ?
                        <Entypo name="eye" size={22} color="black" />
                        :
                        <Entypo name="eye-with-line" size={22} color="black" />
                    }
                  </TouchableOpacity>
                </View>
                <View style={{ ...styles.textInputBox, justifyContent: "space-between" }} >
                  <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Entypo name="lock" size={22} color="black" />
                    <TextInput placeholder='Confirm your Password' placeholderTextColor="black" secureTextEntry={this.state.visible} style={{ paddingLeft: 15, width: "80%", color: "black" }} onChangeText={(text) => this.setState({ cpassword: text })} ></TextInput>
                  </View>

                </View>
                <View >
                  <TouchableOpacity onPress={() => this.onSubmit()} >
                    <LinearGradient colors={["green", '#0aa66b']} style={styles.linearGradient} start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}>
                      <Text style={styles.buttonText}>
                        Register
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                  <View style={{ flexDirection: "row", marginTop: 12, alignSelf: "center" }}>
                    <Text style={{ fontSize: 13, marginTop: 2, color: "white" }}>
                      Already have an Account ?
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                      <Text style={{ fontSize: 15, fontWeight: "700", color: "white", marginLeft: 5 }}>
                        Sign In
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Animated.View>



          </View>
        </ImageBackground>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  textInputBox: { backgroundColor: "white", width: "85%", alignSelf: "center", marginBottom: 20, borderRadius: 7, paddingHorizontal: 15, display: "flex", flexDirection: "row", alignItems: "center", color: "white", borderColor: "black", borderWidth: 1 },
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