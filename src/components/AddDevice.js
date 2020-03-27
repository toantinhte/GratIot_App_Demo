import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from './HeadControll';
import Image1 from '../publics/images/congTacWifi.jpg';
import Image2 from '../publics/images/trungTamHongNgoai.jpg';
import Image3 from '../publics/images/trungTamRF.png';
import Image4 from '../publics/images/TrungTamZigbee.jpg';

function Item({url, title, reviews, onPress}) {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderColor: 'rgb(200,200,200)',
        borderWidth: 1,
        alignItems: 'center',
        padding: 10,
      }}
      onPress={onPress}>
      {url ? <Image source={url} style={{width: 80, height: 80}} /> : null}
      <View style={{padding: 10}}>
        <Text style={{fontWeight: '300', textTransform: 'uppercase'}}>
          {title}
        </Text>
        <Text style={{textAlign: 'left'}}>{reviews}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function AddDevice({navigation, route}) {
  const {navigate, goBack} = navigation;
  return (
    <>
      {/* <HeadControll nameScreen={'Thêm thiết bị'} goBack={goBack} /> */}
      <Header
        nameScreen={'Thêm thiết bị'}
        onLeft={goBack}
      />
      <View>
        <Text style={{padding: 10}}>Lựa chọn thiết bị để tiếp tục:</Text>
        <Item
          title={'Công tắc wifi'}
          url={Image1}
          onPress={() => navigate('AddDevice2')}
        />
        <Item
          title={'Trung tâm hồng ngoại'}
          url={Image2}
          onPress={() => navigate('AddDevice2')}
        />
        <Item
          title={'Trung tâm RF'}
          url={Image3}
          onPress={() => navigate('AddDevice2')}
        />
        <Item
          title={'Trung tâm Zigbee'}
          url={Image4}
          onPress={() => navigate('AddDevice5')}
        />
      </View>
    </>
  );
}
