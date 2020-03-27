import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ActionAuth from '../../../components/ActionAuth';
import Layout from '../../../components/LayoutAuth';
import Error from '../../../components/Error';
import TimeRun from '../../../components/TimeRun';

export default function Verify({
  navigation,
  route,
  statusAuth,
  verify,
  sendCodeAgain,
  forgetPasswordVerify
}) {
  const {navigate, goBack} = navigation;
  const {form, bgVerify} = styles;
  const {nameScreen, titleButton, data} = route.params;
  const [disabled, setDisabled] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [code, setCode] = React.useState(null);

  const changeCode = value => {
    setCode(value);
    if (checkCode(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const checkCode = value => {
    if (value.length < 6) {
      setError('Mã xác nhận không hợp lệ');
      return false;
    }
    setError(null);
    return true;
  };

  const onPress = () => {
    if (checkCode(code)) {
      switch (nameScreen) {
        case 'Nhập mã xác nhận':
          //fetch code to server to check it
          verify({
            // code:code
            //fake
            code: code,
            ...data,
          });
          break;
        case 'Nhập mã lấy lại mật khẩu':
          forgetPasswordVerify({
            code: code,
            ...data,
          })
          break;
      }
    }
  };

  return (
    <Layout nameScreen={nameScreen} goBack={goBack} hasHeader={true}>
      <View style={bgVerify}>
        <Error
          color={'rgb(63,63,63)'}
          error={`Mã xác nhận đã được gửi vào số điện thoại: \n ( +${data.callingCode}) ${data.phone} \n`}
        />
        <View style={form}>
          <View
            style={{
              width: 340,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              justifyContent: 'center',
            }}>
            <Input
              placeholder={'Mã xác nhận'}
              bgColor={'white'}
              keyboardType={'numeric'}
              onChange={changeCode}
              width={300}
            />
            <TimeRun onPress={() => {sendCodeAgain({...data})}}/>
          </View>
        </View>
        <Error error={statusAuth.error || error} />
        <Button
          title={titleButton}
          disabled={statusAuth.loading || disabled}
          onPress={onPress}
          marginVertical={20}
          loading={statusAuth.loading}
        />
        <ActionAuth
          title1={'Đăng nhập'}
          onPress1={() => navigate('Login')}
          title2={'Đăng ký tài khoản'}
          onPress2={() => navigate('Register')}
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
  bgVerify: {justifyContent: 'center', alignItems: 'center'},
});
