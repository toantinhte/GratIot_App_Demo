import React from 'react';
import {View, ImageBackground, Dimensions} from 'react-native';
import image from '../publics/images/bgApp.jpg';

const widthScreen = Dimensions.get('screen').width;

export default function ItemScene({
  source = image,
  children,
  bgColor = 'rgba(255,255,255,0.5)',
}) {
  return (
    <ImageBackground source={source} style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: bgColor,
        }}>
        {children}
      </View>
    </ImageBackground>
  );
}
