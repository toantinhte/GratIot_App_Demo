import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../../components/Button';
import Header from '../../../components/HeadControll';
import BgApp from '../../../components/BgApp';

const widthScreen = Dimensions.get('screen').width;

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

export default function Scene({navigation, route}) {
  const {navigate, goBack} = navigation;
  const [status, setStatus] = React.useState(0);
  const onRedirect = () => {
    if (status == 1) {
      navigate('AddSence');
    } else {
      navigate('');
    }
  };
  return (
    <>
      <Header
        titleLeft={'Sửa'}
        iconLeft={<Text></Text>}
        onRight={onRedirect}
        iconRight={
          <Icon name={'md-add'} size={20} color={'rgb(0, 145, 187)'} />
        }
      />
      <BgApp>
        <View style={{marginVertical: 10}}>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              overflow: 'hidden',
              borderRadius: 10,
              width: widthScreen - 40,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <Button
              borderRadius={0}
              title={'Kịch bản bấm chạy'}
              color={status == 0 ? 'rgb(0, 145, 187)' : 'rgb(200,200,200)'}
              width={(widthScreen - 40) / 2}
              onPress={() => setStatus(0)}
              disabled={false}
            />
            <Button
              borderRadius={0}
              title={'Kịch bản tự động'}
              color={status == 1 ? 'rgb(0, 145, 187)' : 'rgb(200,200,200)'}
              width={(widthScreen - 40) / 2}
              onPress={() => setStatus(1)}
              disabled={false}
            />
          </View>
        </View>
      </BgApp>
    </>
  );
}
