import React from 'react';
import logoImg from '../publics/images/logo.png';
import {StyleSheet, View, Image, Text} from 'react-native';

export default function Logo({bgColor, colorText}) {
  const styles = StyleSheet.create({
    bgLogo: {
      padding: 10,
      marginBottom: 10,
      backgroundColor: bgColor || 'rgba(0,0,0,0.01)',
      borderRadius: 10,
      overflow: 'hidden',
    },
    logo: {width: 150, height: 60},
    bg: {flex: 2, justifyContent: 'center', alignItems: 'center'},
    quote: {textAlign: 'center', color: colorText || 'black'},
  });

  const {bgLogo, logo, bg, quote} = styles;
  return (
    <View style={bg}>
      <View style={bgLogo}>
        <Image source={logoImg} style={logo} />
      </View>
      <Text style={quote}>Chia sẻ hiện tại, kết nối tương lai!</Text>
    </View>
  );
}
