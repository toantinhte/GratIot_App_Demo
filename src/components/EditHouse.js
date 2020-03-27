import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, ScrollView, Alert} from 'react-native';
import Button from './Button';
import Avatar from '../components/Avatar';
import Header from './HeadControll';
import EditAutoFocus from './EditAutoFocus';
import ButtonNextRight from './ButtonNextRight';

const widthScreen = Dimensions.get('screen').width;
export default function EditHouse({
  navigation,
  route,
  editHouse,
  data,
  deleteHouse,
  houseIsSelected,
  selectHouse,
  addHouse,
  infoUser,
  room,
}) {
  const {navigate, goBack} = navigation;
  const {id, houseName, owner} = route.params;
  const {bgButtonInfoUserOfHouse, bgButtonDel} = styles;
  const onEditHouse = value => {
    if (value) {
      editHouse({id: id, houseName: value, owner: owner});
    }
  };
  const onManagerRoom = ()=>{
    navigate('ManagerRoom', {houseId:id});
  }
  const onDelHouse = houseId => {
    Alert.alert(
      'Thông báo',
      'Bạn có chắc chắn muốn xóa nhà này!',
      [
        {
          text: 'Không, tôi không muốn xóa!',
          style: 'cancel',
        },
        {
          text: 'Chắc chắn',
          onPress: async () => {
            if (houseId == houseIsSelected) {
              const newData = await data.filter(item => {
                return item.id != houseIsSelected;
              });
              if (newData.length >= 1) {
                await selectHouse(newData[0].id);
              } else {
                if (houseName == 'New house') {
                  goBack();
                  return;
                }
                await addHouse({
                  id: 0,
                  houseName: 'New house',
                  owner: {...infoUser},
                });
                await selectHouse(0);
              }
            }
            await deleteHouse(houseId);
            await goBack();
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      <Header nameScreen={'Cài đặt nhà'} onLeft={goBack} />
      <View style={{marginTop: 20}}>
        <View style={{backgroundColor: 'white'}}>
          <EditAutoFocus
            onGetValue={onEditHouse}
            valueDefault={houseName}
            title={'Tên nhà'}
          />
          <ButtonNextRight title={'Vị trí nhà'} height={60} />
          <ButtonNextRight
            title={'Quản lý phòng'}
            height={60}
            value={room[id]?`${room[id].length} phòng`:'0 phòng'}
            onPress={onManagerRoom}
          />
        </View>
        <ButtonNextRight
          title={'Quản lý chia sẻ thiết bị'}
          height={60}
          marginVertical={20}
        />
        <View style={bgButtonInfoUserOfHouse}>
          <Avatar bgWidth={40} bgHeight={40} width={20} height={30} />
          <ButtonNextRight
            title={
              owner && owner.phone != infoUser.phone?'Chủ nhà':'Chủ nhà\n(chính là bạn)'
            }
            value={owner?`( +${owner.callingCode}) ${owner.phone}`:`( +${infoUser.callingCode}) ${infoUser.phone}`}
            height={80}
            width={widthScreen - 50}
          />
        </View>
        <View style={bgButtonDel}>
          <Button
            title={'Xóa'}
            color={'red'}
            disabled={false}
            onPress={() => onDelHouse(id)}
            marginVertical={20}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bgButtonInfoUserOfHouse: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  bgButtonDel: {
    overflow: 'hidden',
    borderRadius: 20,
    width: widthScreen - 60,
    alignSelf: 'center',
  },
});
