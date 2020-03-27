import React from 'react';
import {Text, View} from 'react-native';

export default function ItemCirlce({title, size=40, bgColor='rgb(200,200,200)', color='white', fontSize=20}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: fontSize, color: color, textAlign: 'center'}}>{title}</Text>
    </View>
  );
}
