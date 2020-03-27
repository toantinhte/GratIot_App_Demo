//is writed by Anh Ngo on 02/06/2020. Thanks for read and use

//----------------------------------------------Note---------------------------------------------------------------------
//props = [bgColor, width, height,fontSize, color,title]
//Events = [onPress, onPressOut, onPressIn]
//----------------------------------------------Note---------------------------------------------------------------------


import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ButtonAddDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        this.onPress = this.onPress.bind(this);

        this.styles = StyleSheet.create({
            bgItem: {
                width: Number(this.props.width) ? Number(this.props.width) : 160,
                height: Number(this.props.height) ? Number(this.props.height) : 120,
                backgroundColor: this.props.bgColor ? this.props.bgColor : 'white',
                margin: 10,
                borderRadius: 20,
                overflow: 'hidden',
                justifyContent: "center",
                alignItems: 'center',
            }
        })

    }

    onPress = () => {
        if (this.props.onPress) this.props.onPress();
    }

    render() {

        const { bgItem } = this.styles;

        return (
            <TouchableOpacity style={bgItem} onPress={this.onPress}>
                <Icon name={'ios-add-circle-outline'} size={this.props.size ? this.props.size : 60} color={this.props.color ? this.props.color : 'blue'} />
            </TouchableOpacity>
        )
    }
}
