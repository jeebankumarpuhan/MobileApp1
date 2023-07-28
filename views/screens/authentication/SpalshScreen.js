import React, { Component } from 'react'
import { Button, ImageBackground, StatusBar, Text, View } from 'react-native';
import { common_color, HEIGHT, WIDTH } from '../../lib/Constants';


export default class SpalshScreen extends Component {constructor(props) {
  super(props)

  this.state = {
     
  }
}
componentDidMount=(()=>{
setTimeout(() => {
    this.props.navigation.navigate('Login');
}, 5000);
})
  render() {
    return (
        <ImageBackground source={require('../../images/bg.jpg')} resizeMode={'cover'} imageStyle={{ opacity: 0.8 }} style={{ height: HEIGHT,width:WIDTH }}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <StatusBar backgroundColor={common_color} />
            <View style={{ height: "40%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
                {/* <View style={{ height: "65%", width: "50%" }}>
                    <Image source={require('../../../images/loginLogo.png')} style={{ height: "100%", width: "100%" }} />
                </View> */}
                {/* <View>
                    <Text style={{ fontSize: 30, fontFamily: "Gill Sans", fontWeight: "800", color: common_color }}>Food App</Text>
                    <Text style={{ fontWeight: "800", color: "black", fontSize: 12, textAlign: "center" }}>Order Favorite Food</Text>
                </View> */}
            </View>
        </View>
    </ImageBackground>
    )
  }
}
