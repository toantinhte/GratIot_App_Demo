import React from 'react';
import {ScrollView, Text} from 'react-native';
import ButtonNextRight from './ButtonNextRight';
import Header from './HeadControll';


function ActionIsSelect({type, value}) {
  switch (type) {
    case 'power':
      return value==1?'Bật':'Tắt';
    case 'color':
      return (
      <Text style={{padding:10,backgroundColor:value, color:'white'}}>{value}</Text>
      );
  }
}



export default function Actions({navigation, route, listActions, deviceInfo}) {
  const {navigate, goBack} = navigation;
  const {id, deviceName, actions} = route.params;
  const {data, error, loading} = deviceInfo;

  return (
    <>
      <Header nameScreen={'Chọn hành động'} onLeft={goBack} />
      <ScrollView>
        {actions
          ? actions.map(item => (
              <ButtonNextRight
                title={item.name}
                onPress={() => navigate('ActionDetail', {...item, deviceId:id})}
                value={<ActionIsSelect type={item.type} value={data[id].actions[item.type]}/>}
              />
            ))
          : null}
      </ScrollView>
    </>
  );
}
