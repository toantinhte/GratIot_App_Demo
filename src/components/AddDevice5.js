import React from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';
import imageZigbee from '../publics/images/TrungTamZigbee.jpg';
import Header from './HeadControll';
import ItemCircle from './ItemCirlce';

const widthScreen = Dimensions.get('screen').width;

export default function AddDevice({navigation, route}) {
  const {navigate, goBack} = navigation;
  const {bgItemCircle,bgWarning, bgButtonNext} = styles;

  return (
    <>
      <Header nameScreen={'Thêm thiết bị'} onLeft={goBack} />
      <View style={{width: '100%'}}>
        <View
          style={bgItemCircle}>
          <ItemCircle title={1} />
          <ItemCircle title={2} bgColor={'rgb(0, 145, 187)'} />
          <ItemCircle title={3} />
          <ItemCircle title={4} />
          <ItemCircle title={5} />
        </View>
        <View style={{width: widthScreen - 40, alignSelf: 'center'}}>
          <Text style={{padding: 10}}>
            Bước 1: Cấp nguồn điện cho 'trung tâm Zigbee'.
          </Text>
          <Text style={{padding: 10}}>
            Bước 2: Cắm cổng mạng LAN cho 'trung tâm Zigbee'
          </Text>
          <Image
            source={imageZigbee}
            style={{width: 300, height: 300, alignSelf: 'center'}}
          />
          <View
            style={bgWarning}>
            <Icon name={'ios-warning'} size={30} color={'orange'} />
            <Text style={{padding: 10}}>
              Chú ý: Điện thoại và trung tâm Zigbee phải kết nối cùng một mạng
              LAN
            </Text>
          </View>
        </View>
        <View style={bgButtonNext}>
        <Button
          title={'Xác nhận'}
          disabled={false}
          onPress={() => navigate('AddDevice4')}
        />
      </View>
      </View>
    </>
  );
}


//style
const styles = StyleSheet.create({
  bgItemCircle: {
    marginVertical: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: widthScreen - 40,
    alignSelf: 'center',
  },
  bgButtonNext: {
    overflow: 'hidden',
    borderRadius: 10,
    width: widthScreen - 40,
    alignSelf: 'center',
  },
  bgWarning:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen - 40,
    paddingLeft: 20,
  },
});
