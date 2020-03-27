import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import BgApp from './BgApp';
import Header from './HeadControll';
import Input from './Input';
import Button from './Button';
import Error from './Error';

const widthScreen = Dimensions.get('screen').width;

export default function AddSence({navigation, route}) {
  const {navigate, goBack} = navigation;
  const [value, setValue]  = React.useState(null);
  const [error, setError] = React.useState(null);

  const onChangeInput = (value) => {
      if(value){
          setError(null);
          setValue(value);
      }else{
          setError('Vui lòng nhập tên kịch bản!')
      }
  }

  const onNext = () => {
      navigate('AddSence2', {senceName:value})
  }

  return (
    <>
      <Header onLeft={goBack} nameScreen={'Thêm kịch bản tự động'} />
      <BgApp>
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 10,
          }}>
          <Text>Tên kịch bản: </Text>
          <Input
            width={widthScreen - 100}
            placeholder={'Tên kịch bản'}
            autoFocus={true}
            onChange={onChangeInput}
          />
        </View>
        <Error/>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            width={widthScreen - 40}
            borderRadius={20}
            marginVertical={20}
            disabled={false}
            title={'Tiếp tục'}
            onPress={onNext}
          />
        </View>
      </BgApp>
    </>
  );
}
