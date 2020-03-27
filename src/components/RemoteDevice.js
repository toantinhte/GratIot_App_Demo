import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Header from './HeadControll';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import BgApp from './BgApp';
import Power from './Power';
import {setDate} from '../handle';

export default function RemoteDevice({
  navigation,
  route,
  device,
  deviceInfo,
  editDeviceInfo,
  editDevice,
  addHistory,
  sendDataListAlarm,
}) {
  const {navigate, goBack} = navigation;
  const {id, deviceName,actions} = route.params;
  const {data, loading, error} = deviceInfo;

  const changePower = () => {
    if(data[id]){
      if(data[id].actions.power == 1){
        editDeviceInfo({
          ...data[id],
          actions:{
            ...data.actions,
            power:'0',
          }
        })
      }else{
        editDeviceInfo({
          ...data[id],
          actions:{
            ...data.actions,
            power:'1',
          }
        })
      }
    }
  };

  const onOpenEditDevice = () => {
    navigate('EditDevice', {...route.params});
  };

  const onOpenListAlarm = async () => {
    sendDataListAlarm(id);
    navigate('ListAlarm', {...route.params});
  };

  const onOpenHistory = () => {
    navigate('History', {...route.params});
  };

  return (
    <>
      <Header
        nameScreen={deviceName}
        iconRight={
          <Icon name={'ios-menu'} size={20} color={'rgb(0, 145, 187)'} />
        }
        onRight={onOpenEditDevice}
        onLeft={goBack}
      />
      <BgApp>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              width: 200,
              height: 500,
              borderRadius: 20,
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 3,
                width: '100%',
                justifyContent: 'space-around',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}
                onPress={onOpenListAlarm}>
                <Icon name={'md-clock'} size={30} color={'rgb(63,63,63)'} />
                <Text>Hẹn giờ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}
                onPress={onOpenHistory}>
                <Icon2 name={'history'} size={30} color={'rgb(63,63,63)'} />
                <Text>Lịch sử</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 9, justifyContent: 'center'}}>
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={changePower}>
                <Power
                  size={100}
                  color={data[id] && data[id].actions.power == 1 ? 'rgb(0, 145, 187)' : 'rgb(200,200,200)'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </BgApp>
    </>
  );
}
