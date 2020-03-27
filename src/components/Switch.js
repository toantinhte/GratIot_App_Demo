import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {} from 'react-native-gesture-handler';

export default function Switch({
  size = 100,
  bgColorActive = 'rgb(0, 145, 187)',
  bgColorNotActive = 'white',
  onPress,
  valueDefault = 0,
}) {
  const [status, setStatus] = React.useState(valueDefault);
  const onChange = async() => {
      if(status==0){
          setStatus(1);
          onPress(1);
      }else{
          setStatus(0);
          onPress(0);
      }
  };

  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size / 2,
        backgroundColor: status==1 ? bgColorActive : bgColorNotActive,
        borderRadius: size / 2,
        overflow: 'hidden',
        borderColor: bgColorActive,
        borderWidth: 1,
      }}
      onPress={onChange}>
      <Text
        style={{
          width: (size - 8) / 2,
          height: (size - 8) / 2,
          borderRadius: (size - 8) / 4,
          backgroundColor: status==1 ? bgColorNotActive : bgColorActive,
          position: 'absolute',
          top: 1,
          bottom: 1,
          left: status==1 ? size / 2 - 1:1,
        }}></Text>
    </TouchableOpacity>
  );
}
