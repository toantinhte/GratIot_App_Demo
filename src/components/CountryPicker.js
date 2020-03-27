import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CountryPicker from 'react-native-country-picker-modal';

export default function CountryPickerAN({title,fontSize,color, height, bgColor, width, onPress, onSelect}) {
  const [isSelect, setIsSelect] = React.useState(false);
  const [country, setCountry] = React.useState('VN');
  const [callingCode, setCallingCode] = React.useState('84');
  const styles = StyleSheet.create({
    bgSelect: {
      padding: 20,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      width: Number(width) ? Number(width) : 340,
      height: Number(height) ? Number(height) : 50,
      backgroundColor: bgColor ? bgColor : null,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomColor:'rgba(0,0,0,0.08)',
      borderBottomWidth:1,
    },
    titleText: {
      color: color ? color : 'black',
      fontSize: Number(fontSize) ? Number(fontSize) : 14,
    },
    buttonSelect: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  const onTouch = () => {
    setIsSelect(true);
    if (onPress) onPress();
  };

  const onChange = value => {
    setCallingCode(value.callingCode);
    setCountry(value.cca2);
    if (onSelect) onSelect(value);
  };

  const onClose = () => {
    setIsSelect(false);
  };

  const {bgSelect, titleText, buttonSelect} = styles;

  return (
    < TouchableOpacity onPress={onTouch} style={{overflow:'hidden'}}>
      <View style={{overflow: 'hidden', height: 0, width: 0}}>
        <CountryPicker
          withFilter={true}
          visible={isSelect}
          onClose={onClose}
          placeholder=""
          onSelect={onChange}
        />
      </View>
      <View style={bgSelect}>
        <Text style={titleText}>{title}</Text>
        <View style={buttonSelect} >
          <Text style={titleText}>
            {country + '(+' + callingCode + ' )'}
          </Text>
          <Icon
            name="chevron-right"
            style={{marginLeft: 20, fontSize: fontSize}}
          />
        </View>
      </View>
    </ TouchableOpacity>
  );
}
