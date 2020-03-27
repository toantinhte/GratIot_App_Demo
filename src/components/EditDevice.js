import React from 'react';
import {Text, View, Dimensions, StyleSheet, ScrollView} from 'react-native';
import Button from './Button';
import Header from './HeadControll';
import EditAutoFocus from './EditAutoFocus';
import ButtonNextRight from './ButtonNextRight';

const widthScreen = Dimensions.get('screen').width;

export default function EditDevice({
  navigation,
  route,
  editDevice,
  deleteDevice,
  room,
}) {
  const {navigate, goBack} = navigation;
  const {id, roomId, deviceName} = route.params;
  const [deviceNameIsEdit, setDeviceName] = React.useState(deviceName);
  const onEditDevice = deviceName => {
    if (deviceName) {
      setDeviceName(deviceName);
      editDevice({...route.params, deviceName: deviceName});
    }
  };

  const onDeleteDevice = async () => {
    console.log(id);
      await deleteDevice(id, roomId);
      await navigate('Home');
  };
  return (
    <>
      <Header nameScreen={'Cài đặt thiết bị'} onLeft={goBack} />
      <ScrollView contentContainerStyle={{marginTop: 20}}>
        <Text style={{padding: 10, color: 'rgb(63,63,63)'}}>
          Thông tin cơ bản
        </Text>
        <View>
          <View
            style={{
              backgroundColor: 'white',
            }}>
            <EditAutoFocus
              title={'Thiết bị :'}
              placeholder={'Nhập tên thiết bị'}
              valueDefault={deviceNameIsEdit}
              onGetValue={onEditDevice}
            />
          </View>
          <ButtonNextRight title={'Tên tiếng anh'} />
          <ButtonNextRight
            title={'Vị trí thiết bị'}
            value={
              room && room[0]
                ? room[0].filter(item => {
                    return item.id == roomId;
                  })[0].roomName
                : 'đang cập nhật...'
            }
          />
        </View>

        <Text
          style={{
            paddingLeft: 10,
            paddingTop: 20,
            paddingBottom: 10,
            color: 'rgb(63,63,63)',
          }}>
          Hỗ trợ điều khiển qua giọng nói:
        </Text>
        <Text
          style={{
            paddingLeft: 10,
            paddingTop: 20,
            paddingBottom: 10,
            color: 'rgb(63,63,63)',
          }}>
          Thông tin cài đặt khác
        </Text>
        <ButtonNextRight title={'Thông báo'} disable={true} />
        <ButtonNextRight title={'Chia sẻ thiết bị'} />
        <ButtonNextRight title={'Kiểm tra, nâng cấp phần mềm'} disable={true} />
        <ButtonNextRight title={'Thông tin khác'} />
        <View
          style={{
            overflow: 'hidden',
            borderRadius: 20,
            width: widthScreen - 60,
            alignSelf: 'center',
          }}>
          <Button
            title={'Xóa'}
            disabled={false}
            onPress={onDeleteDevice}
            color={'red'}
            marginVertical={20}
          />
        </View>
      </ScrollView>
    </>
  );
}
