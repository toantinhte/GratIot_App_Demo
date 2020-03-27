import React, {Component} from 'react';
import {FlatList} from 'react-native';
import ButtonNextRight from './ButtonNextRight';
import Header from './HeadControll';
import RoomModal from './RoomModal';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ManagerRoom({navigation, route, data, addRoom}) {
  const {navigate, goBack} = navigation;
  const {houseId} = route.params;
  const [visible, setVisible] = React.useState(false);

  const onOpenModal = () => {
    setVisible(true);
  };

  const onAddRoom = async(value) => {
    if(value){
      //fake id
     await addRoom({roomName:value, id:10, houseId:houseId});
     await onCloseModal();
    }
  };

  const onCloseModal = () => {
    setVisible(false);
  };
  const onEditRoom = room => {
    navigate('EditRoom', room);
  };

  return (
    <>
      <Header
        nameScreen={'Quản lý phòng'}
        onLeft={goBack}
        iconRight={
          <Icon name={'md-add'} size={20} color={'rgb(0, 145, 187)'} />
        }
        onRight={onOpenModal}
      />
      <FlatList
        data={data[houseId]}
        renderItem={({item}) => (
          <ButtonNextRight
            key={item.id}
            title={item.roomName}
            onPress={() => onEditRoom(item)}
          />
        )}
        contentContainerStyle={{marginTop: 10}}
      />
      <RoomModal visible={visible} onCancel={onCloseModal} onAddRoom={onAddRoom}/>
    </>
  );
}
