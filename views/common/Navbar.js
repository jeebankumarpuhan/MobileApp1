import React, { Component } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { HEIGHT, WIDTH } from '../lib/Constants'
import AntDesign from 'react-native-vector-icons/AntDesign';
import SidebarModal from './SidebarModal';


export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modal: false
        }
    }
    render() {

        return (
            <View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", height: HEIGHT / 14, width: WIDTH, backgroundColor: '#32356a', alignItems: "center" }}>
                    <View style={{ margin: 3 }}>
                        <TouchableOpacity onPress={() => { this.setState({ modal: true }) }}>
                            <AntDesign name="menuunfold" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: "85%", width: "15%", backgroundColor: '#32356a', borderRadius: 50 }}>
                        <Image source={require("../images/register.png")} style={{ height: "100%", width: "100%" }}></Image>
                    </View>

                </View>
                <SidebarModal modalview={this.state.modal} onClose={() => { this.setState({ modal: false }) }} />
            </View>
        )
    }
}
