import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function ItemRoomEdit ({title, onPress}) {
        return (
            <View
                  style={{
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20,
                  }}>
                  <Text>{title}</Text>
                  <TouchableOpacity
                    onPress={onPress}>
                    <Icon name={'delete'} size={30} color={'red'} />
                  </TouchableOpacity>
                </View>
        )
}
