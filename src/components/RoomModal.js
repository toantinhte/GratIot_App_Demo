import React from 'react';
import {Text, View, Modal, TouchableOpacity,Dimensions} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Error from '../components/Error';

const widthScreen = Dimensions.get('screen').width;

function Item({title, onPress}) {
  const onSelect = () => {
    if (onPress) onPress(title);
  };

  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        width: 100,
        height: 40,
        borderColor: 'rgb(0, 145, 187)',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
      }}
      onPress={onSelect}>
      <Text style={{color: 'rgb(0, 145, 187)'}}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function RoomModal({visible, onAddRoom, onCancel}) {
    const [roomSelected, setRoomSelected] =React.useState(null);
    const [error, setError] = React.useState(null);

    const onSelected = (value) => {
        setRoomSelected(value);
    }

    const onChangeInput = (value) =>{
        setRoomSelected(value);
    }

    const onAdd = ()=>{
        if(roomSelected){
            setError(null);
            if(onAddRoom) onAddRoom(roomSelected);
        }else{
            setError('Vui lòng nhập tên phòng!')
        }
    }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      presentationStyle={'overFullScreen'}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}>
        <View
          style={{
            width: widthScreen-10,
            height:350,
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            overflow: 'hidden',
          }}>
          <Text
            style={{
              fontSize: 20,
              padding: 5,
              width: '100%',
              backgroundColor: 'rgb(200,200,200)',
              textAlign: 'center',
            }}>
            Thêm phòng
          </Text>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>Tên phòng</Text>
            <Input placeholder={'Tên phòng'} width={250} defaultValue={roomSelected} onChange={onChangeInput}/>
          </View>
          <Error error={error}/>
          <View style={{flexWrap: 'wrap', width: '100%', flexDirection: 'row'}}>
            <Item title={'Phòng khách'} onPress={onSelected}/>
            <Item title={'Phòng ngủ'} onPress={onSelected}/>
            <Item title={'Phòng ăn'} onPress={onSelected}/>
            <Item title={'Phòng bếp'} onPress={onSelected}/>
            <Item title={'Phòng vệ sinh'} onPress={onSelected} />
            <Item title={'Phòng Gym'} onPress={onSelected}/>
            <Item title={'Ngoài sân'} onPress={onSelected}/>
            <Item title={'Ngoài vườn'} onPress={onSelected}/>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}>
            <Button
              title={'Hủy'}
              color={'rgb(255,191,0)'}
              disabled={false}
              width={100}
              onPress={onCancel}
            />
            <Button title={'Thêm'} disabled={false} width={100} onPress={onAdd} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
