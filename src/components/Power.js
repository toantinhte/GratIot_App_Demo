import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';


export default function Power ({size=40,color='rgb(200,200,200)'}) {
        return (
            <View
                style={{
                  width: size,
                  height: size,
                  borderRadius: size/2,
                  borderColor: 'rgb(200,200,200)',
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name={'power'} size={size-10} color={color} />
              </View>
        )
}
