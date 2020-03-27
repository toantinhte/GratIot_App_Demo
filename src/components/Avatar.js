import React from 'react';
import {View, Image} from 'react-native';
import AvatarDefault from '../publics/images/avatar.png';

export default function Avatar({
  url,
  bgWidth = 200,
  bgHeight = 200,
  width = 100,
  height = 130,
}) {
  return (
    <View
      style={{
        width: bgWidth,
        height: bgHeight,
        borderRadius: 100,
        backgroundColor: 'rgb(200,200,200)',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={AvatarDefault || url}
        style={{width: width, height: height}}
      />
    </View>
  );
}
