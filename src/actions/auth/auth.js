import {STARTAUTH, SUCCESSAUTH, ERRORAUTH} from '../../types/auth/auth';
import {fetcher} from '../../handle';
import AsyncStorage from '@react-native-community/async-storage';
import checkStatusApp from '../app/status';
import * as RootNavigation from '../../RootNavigation';

const start = () => ({
  type: STARTAUTH,
});

const success = data => ({
  type: SUCCESSAUTH,
  data: data,
});

const error = error => ({
  type: ERRORAUTH,
  error: error,
});

export const login = data => {
  try {
    return async dispatch => {
      dispatch(start());
      const response = await fetcher(
        'http://192.168.100.9:9999/users/login',
        'POST',
        data,
      );
      if (response) {
        if (response.status == 'success') {
          await AsyncStorage.setItem('token', response.token);
          await dispatch(checkStatusApp());
        }
        if (response.status == 'fail') {
          await dispatch(error(response.error));
        }
        await dispatch(success());
      } else {
        await dispatch(error('Bad request'));
      }
    };
  } catch (err) {
    console.log(err);
  }
};

export const forgotPassword = data => {
  try {
    return async dispatch => {
      await dispatch(start());
      const response = await fetcher(
        'http://192.168.100.9:3000/api/user/forgotPword',
        'POST',
        data,
      );
      await setTimeout(async () => {
        if (response) {
          if (response.status == 'success') {
            await RootNavigation.navigate('VerifyPhone', {
              nameScreen: 'Nhập mã lấy lại mật khẩu',
              titleButton: 'Tiếp tục',
              data: data,
            });
          }
          if (response.status == 'fail') {
            await dispatch(error(response.message));
          }
          await dispatch(success());
        } else {
          await dispatch(error('Bad request'));
        }
      }, 10000);
    };
  } catch (err) {
    console.log(err);
  }
};

export const register = data => {
  try {
    return async dispatch => {
      dispatch(start());
      const response = await fetcher(
        'http://192.168.100.9:9999/users/code',
        'POST',
        data,
      );
      console.log(data);
      await setTimeout(async () => {
        if (response) {
          if (response.status == 'success') {
            await dispatch(success());
            await RootNavigation.navigate('VerifyPhone', {
              nameScreen: 'Nhập mã xác nhận',
              titleButton: 'Tiếp tục',
              data: {...data},
            });
          }
          if (response.status == 'fail') {
            await dispatch(error(response.error));
          }
        } else {
          await dispatch(error('Bad request'));
        }
      }, 10000);
    };
  } catch (err) {
    console.log(err);
  }
};

export const setPassword = data => {
  try {
    return async dispatch => {
      await dispatch(start());
      // const token = await AsyncStorage.getItem('token');
      const response = await fetcher(
        'http://192.168.100.9:9999/users',
        'POST',
        {...data},
      );
      await setTimeout(async () => {
        if (response) {
          if (response.status == 'success') {
            await AsyncStorage.setItem('token', response.token);
            await dispatch(success());
            await dispatch(checkStatusApp());
          }
          if (response.status == 'fail') {
            await dispatch(error(response.error));
          }
        } else {
          await dispatch(error('Bad request'));
        }
      }, 10000);
    };
  } catch (err) {
    console.log(err);
  }
};

export const verify = data => {
  try {
    return async dispatch => {
      dispatch(start());
      const response = await fetcher(
        'http://192.168.100.9:9999/users/verify',
        'POST',
        data,
      );
      await setTimeout(async () => {
        if (response) {
          if (response.status == 'success') {
            // await AsyncStorage.setItem('token', response.token);
            await RootNavigation.navigate('EnterPassword', {
              nameScreen: 'Tạo mật khẩu',
              titleButton: 'Đăng nhập',
              data: {...data},
            });
          }
          if (response.status == 'fail') {
            await dispatch(error(response.error));
          }
          await dispatch(success());
        } else {
          await dispatch(error('Bad request'));
        }
      }, 10000);
    };
  } catch (err) {
    console.log(err);
  }
};

export const sendCodeAgain = data => {
  try {
    return dispatch => {
      fetcher('http://192.168.100.9:9999/users/code', 'POST', data);
    };
  } catch (err) {
    console.log(err);
  }
};

export const forgetPasswordVerify = data => {
  try {
    return async dispatch => {
      dispatch(start());
      const response = await fetcher(
        'http://192.168.100.9:3000/api/user/forgetPwordVerify',
        'POST',
        data,
      );
      await setTimeout(async () => {
        if (response) {
          if (response.status == 'success') {
            await AsyncStorage.setItem('token', response.data.token);
            await RootNavigation.navigate('EnterPassword', {
              nameScreen: 'Tạo mật khẩu mới',
              titleButton: 'Đăng nhập',
              data: {...data},
            });
          }
          if (response.status == 'fail') {
            await dispatch(error(response.message));
          }
          await dispatch(success());
        } else {
          await dispatch(error('Bad request'));
        }
      }, 10000);
    };
  } catch (err) {
    console.log(err);
  }
};
