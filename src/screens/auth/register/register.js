import React from 'react';
import {View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import CountryPicker from '../../../components/CountryPicker';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ActionAuth from '../../../components/ActionAuth';
import Layout from '../../../components/LayoutAuth';
import CheckBox from '../../../components/CheckBox';
import Error from '../../../components/Error';

export default function Register({
  navigation,
  route,
  register,
  statusAuth,
}) {
  const {navigate, goBack} = navigation;
  const {form, bgRegister, bgCondication} = styles;
  const [phone, setPhone] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [callingCode, setCallingCode] = React.useState('84');
  const [disabled, setDisabled] = React.useState(true);
  const [checkBox, setCheckBox] = React.useState(false);

  //--------------------------------Change phone-----------------------------------------
  const changePhone = value => {
    setPhone(value);
    if (checkPhone(value) && checkBox) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  //----------------------------------------Function check phone is filled by user---------------------------------
  const checkPhone = input => {
    if (!input) {
      setError('Nhập số điện thoại của bạn');
      return false;
    }

    let r = /^\d{10}$/;
    if (!input.match(r)) {
      setError('Số điện thoại không hợp lệ');
      return false;
    }

    setError(null);
    return true;
  };

  const onCheck = value => {
    setCheckBox(value);
    if (checkPhone(phone) && value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  //--------------------------------Change Country-----------------------------------------
  const changeCountry = value => {
    setCallingCode(value.callingCode);
  };

  //--------------------------------Check User-----------------------------------------
  const onNext = async () => {
    register({phone: phone, callingCode: callingCode});
  };

  return (
    <Layout nameScreen={'Đăng kí tài khoản'} goBack={goBack} hasHeader={true}>
      <View style={bgRegister}>
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
        <Error error={statusAuth.error || error} />
        <View style={bgCondication}>
          <CheckBox color={'rgb(0, 145, 187)'} onCheck={onCheck} />
          <Text style={{color: 'rgb(63,63,63)'}}>Tôi chấp nhận</Text>
          <TouchableHighlight>
            <Text
              style={{
                color: 'rgb(0, 145, 187)',
                textDecorationLine: 'underline',
                marginLeft: 5,
              }}>
              Chính sách và điều khoản{' '}
            </Text>
          </TouchableHighlight>
        </View>
        <Button
          title={'Tiếp tục'}
          disabled={statusAuth.loading || disabled}
          onPress={onNext}
          marginVertical={20}
          loading={statusAuth.loading}
        />
        <ActionAuth
          title1={'Đăng nhập'}
          onPress1={() => navigate('Login')}
          onPress2={() => {
            navigate('ForgotPassword');
          }}
          title2={'Quên mật khẩu'}
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
  bgCondication: {flexDirection: 'row', marginTop: 20},
  bgRegister: {justifyContent: 'center', alignItems: 'center'},
});
