import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default function AddButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          fontSize: 25,
          width: 60,
          textAlign: 'center',
          color: 'white',
          backgroundColor: 'rgb(0, 145, 187)',
          borderRadius: 20,
        }}>
        +
      </Text>
    </TouchableOpacity>
  );
}
