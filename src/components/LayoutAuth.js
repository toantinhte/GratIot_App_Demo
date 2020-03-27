import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import bgImg from '../publics/images/bg.png';
import HeaderAuth from './HeaderAuth';
import Icon from 'react-native-vector-icons/Ionicons';


function HeadControll ({nameScreen, goBack}) {
  const {
    headerDirect,
    backButton,
    text,
    nameScreenBgStyle,
    nameScreenStyle,
  } = styles;

  return (
    <View style={headerDirect}>
    <TouchableOpacity style={backButton} onPress={goBack}>
      <Icon
        name={'ios-arrow-back'}
        size={20}
        color={'rgb(0, 145, 187)'}
      />
      <Text style={text}>Trở lại</Text>
    </TouchableOpacity>
    <View style={nameScreenBgStyle}>
      <Text style={nameScreenStyle}>{nameScreen || 'Screen'}</Text>
    </View>
  </View>
  )
}


export default function LayoutAuth({children, nameScreen, goBack, hasHeader}) {
  return (
    <ImageBackground source={bgImg} style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1}}  enabled>
        <View style={{flex: 4}}>
          {hasHeader ? (
           <HeadControll nameScreen={nameScreen} goBack={goBack}/>
          ) : null}
          <HeaderAuth />
        </View>
        <View style={{flex: 5, marginTop: 10}}>{children}</View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const widthScreen = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  headerDirect: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  text: {marginLeft: 5, color: 'rgb(0, 145, 187)'},
  backButton: {flexDirection: 'row', alignItems: 'center'},
  nameScreenBgStyle: {
    width: widthScreen,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  nameScreenStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
});
