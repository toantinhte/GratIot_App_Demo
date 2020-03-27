import React from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Header from './HeadControll';
import Button from '../components/Button';
import ItemCircle from './ItemCirlce';
import Power from './Power';

const widthScreen = Dimensions.get('screen').width;

export default function AddDevice({navigation, route}) {
  const {navigate, goBack} = navigation;
  const [status, setStatus] = React.useState(0);
  const [colorWifi, setColorWifi] = React.useState(true);
  const {
    bgButtonSelect,
    bgItemCircle,
    bgTutorial,
    bgPower,
    bgButtonNext,
  } = styles;
  const openAP = () => {
    setStatus(0);
  };
  const openSmart = () => {
    setStatus(1);
  };

  React.useEffect(() => {
    if (status == 0) {
      setTimeout(() => {
        setColorWifi(!colorWifi);
      }, 100);
    } else {
      setTimeout(() => {
        setColorWifi(!colorWifi);
      }, 1000);
    }
  });

  return (
    <>
      <Header onLeft={goBack} nameScreen={'Thêm thiết bị'} />
      <View style={{width: '100%'}}>
        <View style={bgButtonSelect}>
          <Button
            borderRadius={0}
            title={'Chế độ AP'}
            color={status == 0 ? 'rgb(0, 145, 187)' : 'rgb(200,200,200)'}
            width={(widthScreen - 40) / 2}
            onPress={openAP}
            disabled={false}
          />
          <Button
            borderRadius={0}
            title={'Chế độ Smart '}
            color={status == 1 ? 'rgb(0, 145, 187)' : 'rgb(200,200,200)'}
            width={(widthScreen - 40) / 2}
            onPress={openSmart}
            disabled={false}
          />
        </View>
        <View style={bgItemCircle}>
          <ItemCircle bgColor={'rgb(0, 145, 187)'} title={1} />
          <ItemCircle title={2} />
          <ItemCircle title={3} />
          <ItemCircle title={4} />
          <ItemCircle title={5} />
        </View>
        <View style={bgTutorial}>
          <Text style={{padding: 10}}>
            Bước 1: Cấp nguồn điện cho thiết bị.
          </Text>
          <Text style={{padding: 10}}>
            {status == 1
              ? 'Bước 2: Chuyển thiết bị về chế độ Smart (1 giây đèn sẽ nháy 1 lần,như ảnh bên dưới).'
              : 'Bước 2: Chuyển thiết bị về chế độ AP( 1 giây đèn sẽ nháy 10 lần, như ảnh bên dưới).'}
          </Text>
        </View>
        <View
          style={{
            width: widthScreen - 40,
            alignSelf: 'center',
            marginVertical: 30,
          }}>
          <View style={bgPower}>
            <View style={{position: 'absolute', top: 30}}>
              <Icon
                name={'wifi'}
                size={20}
                color={colorWifi ? 'black' : 'rgb(0, 145, 187)'}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
              }}>
              <Power />
              <Power />
              <Power />
            </View>
          </View>
        </View>
        {status == 1 ? (
          <TouchableOpacity style={{alignSelf: 'center', marginBottom: 20}}>
            <Text style={{color: 'rgb(0, 145, 187)'}}>
              Hướng dẫn chuyển thiết bị chế độ cài đặt
            </Text>
          </TouchableOpacity>
        ) : null}

        <View style={bgButtonNext}>
          <Button
            title={status==0?'Xác nhận thiết bị đang chế độ AP':'Xác nhận thiết bị đang chế độ Smart'}
            disabled={false}
            onPress={() => navigate('AddDevice3')}
            width={widthScreen - 40}
          />
        </View>
      </View>
    </>
  );
}

//Style
const styles = StyleSheet.create({
  bgButtonSelect: {
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: 10,
    width: widthScreen - 40,
    alignSelf: 'center',
    marginTop: 10,
  },
  bgItemCircle: {
    marginVertical: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: widthScreen - 40,
    alignSelf: 'center',
  },
  bgTutorial: {width: widthScreen - 40, alignSelf: 'center'},
  bgPower: {
    width: widthScreen - 40,
    height: (widthScreen - 40) / 2,
    borderRadius: 20,
    borderColor: 'rgb(200,200,200)',
    backgroundColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgButtonNext: {
    overflow: 'hidden',
    borderRadius: 10,
    width: widthScreen - 40,
    alignSelf: 'center',
  },
});
