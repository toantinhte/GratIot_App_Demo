import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BgApp from './BgApp';
import Header from './HeadControll';
import Button from './Button';
import ItemImageScence from './ItemImageScene';
import EditAutoFocus from './EditAutoFocus';
import Icon from 'react-native-vector-icons/Ionicons';
import AddButton from './AddButton';

const widthScreen = Dimensions.get('screen').width;

export default function AddSence({navigation, route}) {
  const {navigate, goBack} = navigation;
  const {senceName, uriImageSelected} = route.params;
  const [uri, setUri] = React.useState(
    'https://www.utahrealestate.com/site/img/common/marquee-08.jpg',
  );
  const onSelectImage = () => {
    navigate('ListImage', {
      getUri: setUri,
    });
  };
  const onSelectCondition = () => {
    navigate('Condition');
  };
  const onSelectAction = () => {
    navigate('Actions');
  };

  React.useEffect(() => {
    if (uriImageSelected) {
      setUri(uriImageSelected);
    }
  });
  return (
    <>
      <Header onLeft={goBack} nameScreen={'Thêm kịch bản'} />
      <BgApp>
        <ScrollView
          contentContainerStyle={{alignItems: 'center', marginTop: 10}}>
          <ItemImageScence
            width={widthScreen - 20}
            height={(widthScreen - 20) / 2}
            source={{
              uri: uri,
            }}>
            <View style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
              <EditAutoFocus
                title={'Tên:'}
                valueDefault={senceName}
                placeholder={'Nhập tên kịch bản'}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: widthScreen - 60,
                top: (widthScreen - 100) / 2,
              }}
              onPress={onSelectImage}>
              <Icon name={'ios-images'} size={30} color={'white'} />
            </TouchableOpacity>
          </ItemImageScence>
          <View
            style={{
              width: widthScreen - 20,
              backgroundColor: 'white',
              borderRadius: 10,
              overflow: 'hidden',
              marginVertical: 10,
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: 'rgba(0,0,0,0.1)',
                padding: 10,
                alignItems: 'center',
              }}>
              <Text>Các điều kiện</Text>
              <AddButton onPress={onSelectCondition} />
            </View>
            <View>
              <Text style={{alignSelf: 'center', padding: 20}}>
                Không có điều kiện nào!
              </Text>
            </View>
          </View>
          <View
            style={{
              width: widthScreen - 20,
              backgroundColor: 'white',
              borderRadius: 10,
              overflow: 'hidden',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: 'rgba(0,0,0,0.1)',
                padding: 10,
                alignItems: 'center',
              }}>
              <Text>Các hành động sẽ chạy</Text>
              <AddButton onPress={onSelectAction} />
            </View>
            <View>
              <Text style={{alignSelf: 'center', padding: 20}}>
                Không có hành động nào
              </Text>
            </View>
          </View>
        </ScrollView>
      </BgApp>
    </>
  );
}
