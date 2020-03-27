import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';

export default function Icon(name, color, size) {
  switch (name) {
    case 'home':
      return <Icon2 name={'md-home'} size={size} color={color} />;
      break;
    case 'right':
      <Icon name={'angle-right'} size={size} color={color} />;
      break;
    case 'left':
      break;
    case 'Bottom':
      break;
    case 'Setting':
      return (
        <>
          <Icon2 name={'ios-settings'} size={size / 2} color={color} />
          <Icon2 name={'ios-settings'} size={size} color={color} />
        </>
      );
      break;
    case 'checkMark':
      return <Icon2 name={'md-checkmark'} size={size} color={color} />;
      break;
    default:
        return null;
  }
}
