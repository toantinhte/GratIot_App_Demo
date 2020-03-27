import React from 'react';
import {ImageBackground, Dimensions} from 'react-native';

const widthScreen = Dimensions.get('screen').width;

export default function ItemImageScene({
  source,
  width = (widthScreen - 40) / 2,
  height = (widthScreen - 40) / 3,
  children,
}) {
  return (
    <ImageBackground
      source={source}
      style={{
        width: width,
        height: height,
        borderRadius: 10,
        overflow: 'hidden',
      }}>
      {children}
    </ImageBackground>
  );
}
