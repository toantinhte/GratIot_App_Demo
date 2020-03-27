import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';

export default function ActionAuth({title1, title2, onPress1, onPress2}) {
  return (
    <View
      style={{
        width:340,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop:30
      }}>
      <TouchableOpacity onPress = {onPress1}>
        <Text style={{color:'rgb(0, 145, 187)'}}>{title1}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {onPress2}>
        <Text style={{color:'rgb(0, 145, 187)'}}>{title2}</Text>
      </TouchableOpacity>
    </View>
  );
}
