import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Input from './Input';
import Button from './Button';
import RoomModal from './RoomModal';
import NotFound from './NotFound';
import Error from './Error';
import Header from './HeadControll';
import ItemRoomEdit from './ItemRoomEdit';

const widthScreen = Dimensions.get('screen').width;

export default function AddHouse({navigation, route, addHouse}) {
  const {navigate, goBack} = navigation;
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [houseName, setHouseName] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [room, setRoom] = React.useState([
    'Phòng khách',
    'Phòng ngủ',
    'Phòng tắm',
    'Phòng bếp',
  ]);
  const {bgButtonAddRoom, bgInput} = styles;
  const onChange = houseName => {
    if(houseName){
      setHouseName(houseName);
      setError(null);
    }else{
      setError('Tên nhà không hợp lệ!')
    }
  };
  const onOpenModal = () => {
    setVisibleModal(true);
  };

  const onAddRoom = roomName => {
    setRoom([...room, roomName]);
    setVisibleModal(false);
  };

  const onCancelAddRoom = () => {
    setVisibleModal(false);
  };

  const onDelRoom = roomName => {
    setRoom(
      room.filter((item, index) => {
        return index != room.lastIndexOf(roomName);
      }),
    );
  };
  const onAddHouse = () => {
    if (houseName) {
      setError(null);
      addHouse({id: 4, houseName: houseName});
      goBack();
    } else {
      setError('Tên nhà không hợp lệ!');
    }
  };

  const onGoBack = async () => {
    await Alert.alert(
      'Thông báo',
      'Bạn muốn hủy thêm nhà!',
      [
        {
          text: 'Không hủy',
          style: 'cancel',
        },
        {text: 'Hủy', onPress: goBack},
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      <Header
        nameScreen={'Thêm nhà'}
        onLeft={onGoBack}
        onRight={onAddHouse}
        titleRight={'Lưu'}
      />
      <View style={{marginTop: 20}}>
        <View style={bgInput}>
          <Text style={{marginRight: 5}}>Tên nhà</Text>
          <Input
            placeholder={'Nhập tên nhà'}
            width={widthScreen - 40}
            autoFocus={true}
            onChange={onChange}
          />
        </View>
        <Error error={error} />
        <Text style={{paddingLeft: 10, paddingTop: 40, paddingBottom: 10}}>
          Danh sách phòng:
        </Text>
        <ScrollView style={{marginBottom: 20, height: 350}}>
          {room.length > 0 ? (
            room.map((item, index) => (
              <ItemRoomEdit key={index} title={item} onPress={() => onDelRoom(item)} />
            ))
          ) : (
            <NotFound note={'Danh sách trống'} height={350} />
          )}
        </ScrollView>
        <View style={bgButtonAddRoom}>
          <Button title={'Thêm phòng'} disabled={false} onPress={onOpenModal} />
        </View>
      </View>
      <RoomModal
        visible={visibleModal}
        onAddRoom={onAddRoom}
        onCancel={onCancelAddRoom}
      />
    </>
  );
}

const styles = StyleSheet.create({
  bgButtonAddRoom: {
    overflow: 'hidden',
    borderRadius: 20,
    width: 340,
    alignSelf: 'center',
  },
  bgInput: {
    paddingLeft: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
