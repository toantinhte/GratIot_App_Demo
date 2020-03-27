import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function HeadControll({
  nameScreen = '',
  onLeft,
  onRight,
  titleLeft = 'Trở lại',
  titleRight = '',
  iconLeft,
  iconRight,
}) {
  const {
    headerDirect,
    backButton,
    text,
    nameScreenBgStyle,
    nameScreenStyle,
  } = styles1;

  return (
    <View style={headerDirect}>
      <TouchableOpacity style={backButton} onPress={onLeft}>
        {iconLeft??<Icon name={'ios-arrow-back'} size={20} color={'rgb(0, 145, 187)'} />}
        <Text style={text}>{titleLeft}</Text>
      </TouchableOpacity>
      <View style={nameScreenBgStyle}>
        <Text style={nameScreenStyle}>{nameScreen}</Text>
      </View>
      <TouchableOpacity style={backButton} onPress={onRight}>
      {iconRight}
      <Text style={text}>{titleRight}</Text>
      </TouchableOpacity>
    </View>
  );
}

const widthScreen = Dimensions.get('screen').width;
const styles1 = StyleSheet.create({
  headerDirect: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
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
