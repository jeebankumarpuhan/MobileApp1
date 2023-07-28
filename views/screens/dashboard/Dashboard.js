import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Navbar from "../../common/Navbar"

export default class Dashboard extends Component {
  render() {
    return (
      <View>
        <Navbar/>
        <Text>
        dashboard
        </Text>
        </View>
    )
  }
}
