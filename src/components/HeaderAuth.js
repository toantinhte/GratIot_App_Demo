import React from 'react';
import {View, ImageBackground} from 'react-native';
import bgHeadAuth from '../publics/images/bgHeadAuth.jpg';
import Logo from './logo';

export default function Header() {
  return (
    <ImageBackground
      source={bgHeadAuth}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          backgroundColor: 'rgba(255,255,255,0.5)',
          width: '100%',
          height: '100%',
        }}>
        <Logo bgColor={'rgba(255,255,255,0.97)'} />
      </View>
    </ImageBackground>
  );
}
