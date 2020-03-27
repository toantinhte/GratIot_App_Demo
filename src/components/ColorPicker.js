import React from 'react';
import {ColorPicker} from 'react-native-color-picker';

export default function Picker({ onColorSelected}) {
  return (
    <ColorPicker
      onColorSelected={ onColorSelected}
      style={{flex: 1, width: '100%',height:500, padding:10}}
    />
  );
}
