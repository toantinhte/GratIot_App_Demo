import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity} from 'react-native';
import Error from './Error';
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function EditAutoFocus({
  onGetValue,
  title,
  placeholder,
  valueDefault,
  widthInput,
}) {
  const [focus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault);
  const [error, setError] = React.useState(null);
  const widthScreen = Dimensions.get('screen').width;

  const onEndEditing = e => {
    if (e.nativeEvent.text) {
      setValue(e.nativeEvent.text);
      setFocus(false);
      setError(null);
      if (onGetValue) onGetValue(e.nativeEvent.text);
    } else {
      setError('Trường nhập trống, xin vui lòng nhập!');
    }
  };

  const onFocus = () => {
    setFocus(true);
  };

  return (
    <>
      <View
        style={{
          paddingLeft: 10,
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
        }}>
        <Text style={{marginRight: 5, fontWeight: '300'}}>{title}</Text>
        {focus ? (
          <Input
            placeholder={placeholder}
            width={widthScreen - 100}
            defaultValue={value}
            autoFocus={true}
            onEndEditing={onEndEditing}
          />
        ) : (
          <Text
            style={{
              width: widthInput || widthScreen - 100,
              paddingLeft: 10,
              color: 'rgb(200,200,200)',
            }}>
            {value}
          </Text>
        )}

        <TouchableOpacity onPress={onFocus}>
          <Icon name={'edit'} size={20} color={'rgb(0, 145, 187)'} />
        </TouchableOpacity>
      </View>
      <Error error={error} />
    </>
  );
}
