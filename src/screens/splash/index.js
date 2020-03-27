import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import bgImg from '../../publics/images/bg.png';
import styles from './styles';
import Logo from '../../components/logo';

export default function Splash() {
  const {imgBg,bg, banquyen, text} = styles;
  return (
    <ImageBackground source={bgImg} style={imgBg}>
      <View style={bg}>
      <Logo/>
      <View style={banquyen}><Text style={text}>GratioT 2020. Đã đăng kí bản quyền</Text></View>
      </View>
    </ImageBackground>
  );
}
