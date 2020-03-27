import React from 'react';
import {View, StyleSheet} from 'react-native';
import CountryPicker from '../../../components/CountryPicker';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ActionAuth from '../../../components/ActionAuth';
import Layout from '../../../components/LayoutAuth';
import Error from '../../../components/Error';

export default function ForgotPassword({
  navigation,
  route,
  forgotPassword,
  statusAuth,
}) {
  const {navigate, goBack} = navigation;
  const {form, bgForgotPW} = styles;
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
      setError('Nhập số điện thoại của bạn');
      return false;
    }

    let r = /^\d{10}$/;
    if (!input.match(r)) {
      setError('Số điện thoại không đúng');
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
    if (checkPhone(phone)) {
      forgotPassword({
        phone: phone,
        callingCode: callingCode,
      });
    }
  };
  return (
    <Layout nameScreen={'Quên mật khẩu'} goBack={goBack} hasHeader={true}>
      <View style={bgForgotPW}>
        <View style={form}>
          <CountryPicker
            title={'Country'}
            onSelect={changeCountry}
            bgColor={'white'}
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
            navigate('Register');
          }}
          title2={'Đăng ký'}
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
  bgForgotPW: {justifyContent: 'center', alignItems: 'center'},
});
