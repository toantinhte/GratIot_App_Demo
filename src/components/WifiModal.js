import React from 'react';
import {Text, View, Modal, TouchableOpacity, Dimensions} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Error from '../components/Error';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native-gesture-handler';

const widthScreen = Dimensions.get('screen').width;

function Item({title = 'title', onPress}) {
  const onSelect = () => {
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 50,
        borderBottomColor: 'rgb(0, 145, 187)',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
      }}
      onPress={onSelect}>
      <Text>{title}</Text>
      <Icon name={'wifi'} size={20} />
    </TouchableOpacity>
  );
}

export default function WifiModal({visible, onChangeWifi, onCancel}) {

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
            width: widthScreen - 10,
            height: 350,
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
            Wifi
          </Text>
          <ScrollView style={{width:'100%'}}>
            <Item title={'Ngo Dao Anh'}/>
            <Item title={'Ngo Anh Hien'}/>
          </ScrollView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
              marginBottom:10,
            }}>
            <Button
              title={'Hủy'}
              color={'rgb(255,191,0)'}
              disabled={false}
              width={100}
              onPress={onCancel}
            />
            <Button
              title={'Thêm'}
              disabled={false}
              width={100}
              onPress={onChangeWifi}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
