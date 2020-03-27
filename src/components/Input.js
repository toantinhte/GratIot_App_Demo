import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Input({
  hasIcon,
  placeholder = '',
  placeholderColor = 'rgba(1,1,1,0.5)',
  width = 340,
  height = 50,
  fontSize = 14,
  bgColor = 'white',
  keyboardType,
  onChange,
  defaultValue,
  onEndEditing,
  autoFocus
}) {
  const [isNotShow, setIsNotShow] = React.useState(true);
  const [value, setValue] = React.useState(null);

  const styles = StyleSheet.create({
    passwordBg: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: bgColor,
      width: Number(width),
      height: Number(height),
    },
    inputPassword: {
      fontSize: Number(fontSize),
      width: '80%',
      height: Number(height),
      paddingLeft: 20,
    },
    iconBg: {
      marginRight: 5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '10%',
      height: Number(height)
    },
  });

  const onChangeInput = value => {
    setValue(value);
    if (onChange) onChange(value);
  };

  const isShowValue = () => {
    setIsNotShow(!isNotShow);
  };
  const iconEye = (
    <TouchableOpacity style={styles.iconBg} onPress={isShowValue}>
      {isNotShow ? (
        <Icon name="ios-eye" color="black" size={20} />
      ) : (
        <Icon name="ios-eye-off" color="black" size={20} />
      )}
    </TouchableOpacity>
  );

  const inputPasswordComponent = (
    <TextInput
      style={styles.inputPassword}
      secureTextEntry={isNotShow && hasIcon}
      password={true}
      placeholderTextColor={placeholderColor}
      placeholder={placeholder}
      onChangeText={onChangeInput}
      keyboardType={keyboardType}
      defaultValue={defaultValue}
      onEndEditing={onEndEditing}
      autoFocus={autoFocus}
    />
  );
  return (
    <View style={styles.passwordBg}>
      {inputPasswordComponent}
      {hasIcon ? iconEye : null}
    </View>
  );
}
