import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CountryPicker from '../../../components/CountryPicker';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ActionAuth from '../../../components/ActionAuth';
import Layout from '../../../components/LayoutAuth';
import Error from '../../../components/Error';

export default function Login({navigation, route}) {
  const {navigate, goBack} = navigation;
  const {form, bgLogin} = styles;

  const [phone, setPhone] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [callingCode, setCallingCode] = React.useState('84');
  const [disabled, setDisabled] = React.useState(true);

  //--------------------------------Change phone-----------------------------------------
  const changePhone = value => {
    setPhone(value);
    if (checkPhone(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  //----------------------------------------Function check phone is filled by user---------------------------------
  const checkPhone = input => {
    if (!input) {
      setError('Nhập số điện thoại của bạn!');
      return false;
    }

    let r = /^\d{10}$/;
    if (!input.match(r)) {
      setError('Số điện thoại không không hợp lệ!');
      return false;
    }

    setError(null);
    return true;
  };

  //--------------------------------Change Country-----------------------------------------
  const changeCountry = value => {
    setCallingCode(value.callingCode);
  };

  //--------------------------------Check User-----------------------------------------
  const onNext = async () => {
    try {
      if (checkPhone(phone)) {
        let data = await {
          phone: phone,
          callingCode: callingCode,
        };
        await navigate('EnterPassword', {
          nameScreen: 'Đăng nhập',
          titleButton: 'Đăng nhập',
          data: data,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout nameScreen={'Đăng nhập'} goBack={goBack} hasHeader={false}>
      <View style={bgLogin}>
        <View style={form}>
          <CountryPicker
            title={'Country'}
            bgColor={'white'}
            onSelect={changeCountry}
          />
          <View>
            <Input
              placeholder={'Phone'}
              bgColor={'white'}
              keyboardType={'numeric'}
              onChange={changePhone}
            />
          </View>
        </View>
        <Error error={error} />
        <Button title={'Tiếp tục'} disabled={disabled} onPress={onNext} marginVertical={20}/>
        <ActionAuth
          title1={'Đăng ký tài khoản'}
          onPress1={() => navigate('Register')}
          title2={'Quên mật khẩu'}
          onPress2={() => navigate('ForgotPassword')}
        />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  form: {
    borderColor: 'rgba(0,0,0,0.08)',
    borderWidth: 1,
    borderRadius: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bgLogin: {justifyContent: 'center', alignItems: 'center'},
});
