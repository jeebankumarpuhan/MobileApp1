import React, { Component } from 'react';
import { Modal, Pressable, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { common_color } from '../lib/Constants';
import Entypo from 'react-native-vector-icons/Entypo';


const { width, height } = Dimensions.get('window');


export default class SidebarModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // modalvisible: false,
        };
    }
    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.modalview}
                    onRequestClose={() => {
                        // this.setState({ modalvisible: false });
                        this.props.onClose()
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={{ display: "flex", justifyContent: "flex-end", flexDirection: "row", margin: 2 ,borderWidth:2,borderBottomColor:"white",borderColor:"none"}}>
                            <View>
                                <TouchableOpacity onPress={() => { this.props.onClose() }}>
                                    <Entypo name="squared-cross" size={35} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    centeredView: {
        width: width * 0.5, // Set width to 50% of the screen's width
        height: height,    // Set height to 100% of the screen's height
        // marginTop: 22,
        flex: 1,
        backgroundColor: common_color
    },

});
