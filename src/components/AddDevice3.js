import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';
import Input from './Input';
import WifiModal from './WifiModal';
import Header from './HeadControll';
import ItemCircle from './ItemCirlce';

const widthScreen = Dimensions.get('screen').width;
export default function AddDevice({navigation, route}) {
  const {navigate, goBack} = navigation;
  const [visible, setVisible] = React.useState(false);
  const {bgItemCircle, bgInput, bgButtonNext} = styles;
  const onChangeWifi = () => {
    //Get wifi
  };

  const onCancel = () => {
    setVisible(false);
  };
  const onOpenWifiModal = () => {
    setVisible(true);
  };

  return (
    <>
      <Header nameScreen={'Thêm thiết bị'} onLeft={goBack} />
      <View style={{width: '100%'}}>
        <View style={bgItemCircle}>
          <ItemCircle title={1} />
          <ItemCircle bgColor={'rgb(0, 145, 187)'} title={2} />
          <ItemCircle title={3} />
          <ItemCircle title={4} />
          <ItemCircle title={5} />
        </View>
        <Text style={{textAlign: 'center', padding: 20, fontSize: 20}}>
          Nhập mật khẩu wifi
        </Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <Text>Tên wifi: Ngo Dao Anh</Text>
            <TouchableOpacity onPress={onOpenWifiModal}>
              <Text style={{color: 'rgb(0, 145, 187)'}}>Đổi wifi</Text>
            </TouchableOpacity>
          </View>
          <View style={bgInput}>
            <Icon name={'ios-lock'} size={20} />
            <Input
              placeholder={'Nhập mật khẩu wifi'}
              width={widthScreen - 80}
              hasIcon={true}
            />
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
      <WifiModal
        visible={visible}
        onChangeWifi={onChangeWifi}
        onCancel={onCancel}
      />
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
  bgInput: {
    width: widthScreen - 40,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
});
