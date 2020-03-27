import React from 'react';
import {Text, View} from 'react-native';

export default function Error({error, color}) {
  return (
    <>
      {error ? (
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: color || 'red',textAlign:'center'}}>{error}</Text>
        </View>
      ) : null}
    </>
  );
}
