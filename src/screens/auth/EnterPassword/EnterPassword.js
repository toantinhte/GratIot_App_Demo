import React from 'react';
import {View, StyleSheet} from 'react-native';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ActionAuth from '../../../components/ActionAuth';
import Layout from '../../../components/LayoutAuth';
import Error from '../../../components/Error';

function EnterPassword({navigation, route, login, onSetPassword, statusAuth}) {
  const {navigate, goBack} = navigation;
  const {form, bgEnterPW} = styles;
  const {nameScreen, titleButton, data} = route.params;
  const [password, setPassword] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [disabled, setDisabled] = React.useState(true);

  const onNext = () => {
    if (checkPassword(password)) {
      switch (nameScreen) {
        case 'Đăng nhập':
          login({...data, password: password});
          break;
        case 'Tạo mật khẩu':
          onSetPassword({...data, password: password});
          break;
        case 'Tạo mật khẩu mới':
          onSetPassword({...data, password: password});
          break;
      }
    }
  };

  const onChangePassword = value => {
    setPassword(value);
    checkPassword(value);
    if (checkPassword(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const checkPassword = input => {
    if (!input) {
      setError('Xin vui lòng nhập mật khẩu!');
      return false;
    }

    if (input.length < 6) {
      setError('Mật khẩu phải chứa ít nhất 6 ký tự!');
      return false;
    }

    let re = /[0-9]/;
    if (!re.test(input)) {
      setError('Mật khẩu phải chưa ký tự số!');
      return false;
    }

    re = /[a-z]/;
    if (!re.test(input)) {
      setError('Mật khẩu phải chứa ký tự chữ thường!');
      return false;
    }

    re = /[A-Z]/;
    if (!re.test(input)) {
      setError('Mật khẩu phải chứa ký tự chữ hoa!');
      return false;
    }

    setError(null);
    return true;
  };

  return (
    <Layout nameScreen={nameScreen} goBack={goBack} hasHeader={true}>
      <View style={bgEnterPW}>
        <Error
          color={'rgb(63,63,63)'}
          error={`( +${data.callingCode}) ${data.phone}\n`}
        />
        <View style={form}>
          <View>
            <Input
              placeholder={'password'}
              bgColor={'white'}
              onChange={onChangePassword}
              hasIcon={true}
            />
          </View>
        </View>
        <Error error={statusAuth.error || error} />
        <Button
          title={titleButton}
          disabled={statusAuth.loading || disabled}
          onPress={onNext}
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
  bgEnterPW: {justifyContent: 'center', alignItems: 'center'},
});

export default EnterPassword;
