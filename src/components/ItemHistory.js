import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default function ItemHistory({
  time = new Date(),
  description,
  note,
  width = 350,
  height = 60,
}) {
  return (
    <View style={{flexDirection: 'row', width: width, height: height}}>
      <Text style={{flex: 3, textAlign: 'center'}}>{time}</Text>
      <Text style={{flex: 2, textAlign: 'center'}}>{description}</Text>
      <Text style={{flex: 2, textAlign: 'center'}}>{note}</Text>
    </View>
  );
}
