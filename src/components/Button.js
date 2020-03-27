import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, ActivityIndicator} from 'react-native';

export default function Button({
  title,
  onPress,
  disabled = true,
  color,
  width,
  height,
  borderRadius=20,
  marginVertical=0,
  loading=false
}) {
  const styles = StyleSheet.create({
    bg: {
      overflow: 'hidden',
      borderRadius:borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical:marginVertical
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {textAlign: 'center', color: 'white'},
  });

  const {bg, button, text} = styles;
  return (
    <View style={bg}>
      {disabled ? (
        <View
          style={{
            ...button,
            backgroundColor: 'rgb(200,200,200)',
            width: width || 340,
            height: height || 40,
          }}>
          {loading?<ActivityIndicator size={20} color={'white'} /> : <Text style={{textAlign: 'center', color: 'white'}}>{title}</Text>}
        </View>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={{
            ...button,
            backgroundColor: color || 'rgb(0, 145, 187)',
            width: width || 340,
            height: height || 40,
          }}>
         <Text style={text}>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
