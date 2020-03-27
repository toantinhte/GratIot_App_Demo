import React from 'react';
import {Text,View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ButtonNextRight({
  width = '100%',
  height = 60,
  bgColor = 'white',
  title = 'title',
  onPress,
  value='',
  marginVertical=0,
  hasIcon=true,
  disable=false
}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        height: height,
        alignItems: 'center',
        width: width,
        backgroundColor: bgColor,
        marginVertical:marginVertical,
        opacity:disable?0.1:1,
      }}
      onPress={onPress}>
      <Text style={{marginRight: 5, fontWeight: '300'}}>{title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{marginRight: 10, color: 'rgb(200,200,200)'}}>
          {value}
        </Text>
        {hasIcon?<Icon name={'angle-right'} size={20} />:null}
      </View>
    </TouchableOpacity>
  );
}
