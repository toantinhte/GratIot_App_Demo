import React from 'react';
import {Text, View, Image} from 'react-native';
import notFoundImage from '../publics/images/notfound.png';

export default function NotFound({note,width, height ,widthImage, heightImage, bgColor}) {
  return (
    <View
      style={{
        width:width||'100%',
        height: height||'100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bgColor,
      }}>
      <View>
        <Image
          source={notFoundImage}
          style={{width: widthImage || 100, height: heightImage || 100}}
        />
        <Text style={{textAlign: 'center'}}>{note}</Text>
      </View>
    </View>
  );
}
