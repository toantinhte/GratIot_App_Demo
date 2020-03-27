import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, ScrollView, Alert} from 'react-native';
import Button from './Button';
import Avatar from '../components/Avatar';
import Header from './HeadControll';
import EditAutoFocus from './EditAutoFocus';
import ButtonNextRight from './ButtonNextRight';

const widthScreen = Dimensions.get('screen').width;

export default function EditRoom({navigation, route, editRoom, deleteRoom}) {
  const {navigate, goBack} = navigation;
  const {houseId, id, roomName} = route.params;
  const {bgButtonDel} = styles;
  const onEditRoom = value => {
    if (value) {
      editRoom({id: id, roomName: value, houseId: houseId});
    }
  };
  const onDelRoom = (roomId, houseId) => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắc chắn muốn xóa phòng này!',
      [
        {
          text: 'Không, tôi không muốn xóa!',
          style: 'cancel',
        },
        {
          text: 'Chắc chắn',
          onPress: async () => {
              await deleteRoom(roomId, houseId);
              await goBack();
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      <Header nameScreen={'Cài đặt phòng'} onLeft={goBack} />
      <View style={{marginTop: 20}}>
        <View style={{backgroundColor: 'white'}}>
          <EditAutoFocus
            onGetValue={onEditRoom}
            valueDefault={roomName}
            title={'Tên phòng'}
            widthInput={widthScreen-110}
          />
        </View>
        <View style={bgButtonDel}>
          <Button
            title={'Xóa'}
            color={'red'}
            disabled={false}
            onPress={() => onDelRoom(id, houseId)}
            marginVertical={20}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bgButtonDel: {
    overflow: 'hidden',
    borderRadius: 20,
    width: widthScreen - 60,
    alignSelf: 'center',
  },
});
