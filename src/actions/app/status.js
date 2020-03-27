import {
  STARTAPP,
  SUCCESSAPP,
  SAVEINFOAPP,
  ERRORAPP,
  SIGNEDAPP,
  LOGOUTAPP,
} from '../../types/app/status';
import AsyncStorage from '@react-native-community/async-storage';
import {fetcher} from '../../handle';
import addListRoom, {sendDataRoom} from './room';
import addListDeviceRoom, {sendData} from './deviceRoom';
import addListDevice, {sendDataListDevice} from './device';
import addListAction, {sendDataListAction, resetAction} from './action';
import addListHouse, {sendDataListHouse} from './house';
import {resetHouse} from './house';
import {refreshDevice} from './device';
import {resetRoom} from './room';
import {resetDeviceRoom} from './deviceRoom';
import addListAlarm, {addAlarm} from './alarm';
import addListDeviceInfo, {sendDataListDeviceInfo, editDeviceInfo} from './deviceInfo';

export const startInfo = () => ({
  type: STARTAPP,
});

export const successInfo = () => ({
  type: SUCCESSAPP,
});

export const saveInfo = infoUser => ({
  type: SAVEINFOAPP,
  infoUser: infoUser,
});

export const errorInfo = error => ({
  type: ERRORAPP,
  error: error,
});
export const signed = () => ({
  type: SIGNEDAPP,
});

export const defaultApp = () => ({
  type: LOGOUTAPP,
});

export const logout = () => {
  try {
    return async dispatch => {
      await dispatch(startInfo());
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userId');
      await AsyncStorage.removeItem('houseId');
      await dispatch(resetDeviceRoom());
      await dispatch(resetHouse());
      await dispatch(resetRoom());
      await dispatch(refreshDevice());
      await dispatch(resetAction());
      await dispatch(defaultApp());
      await dispatch(errorInfo('Bad request'));
    };
  } catch (error) {
    console.log(error);
  }
};

export default checkStatusApp = () => {
  try {
    return async dispatch => {
      await dispatch(startInfo());
      const token = await AsyncStorage.getItem('token');
      if (token) {
        let response = await fetcher(
          `http://192.168.100.9:9999/users/me/${token}`,
          'GET',
        );
        if (response) {
          if (response.status == 'success') {
            await AsyncStorage.setItem('userId', response.result.id);
            await dispatch(saveInfo(response.result));
            await dispatch(sendDataListHouse());
            await dispatch(addListHouse());
            const houseIsSelected = await AsyncStorage.getItem('houseId');
            await dispatch(sendDataRoom(houseIsSelected));
            await dispatch(addListRoom());
            await dispatch(sendDataListDevice(1));
            await dispatch(sendDataListDeviceInfo());
            // await dispatch(sendDataRoom());
            await dispatch(sendDataListAction())
            await dispatch(addListDevice());
            await dispatch(addListDeviceRoom());
            await dispatch(addListAction());
            await dispatch(addListAlarm());
            await dispatch(addAlarm());
            await dispatch(editDeviceInfo());
            await dispatch(addListDeviceInfo());
            await dispatch(signed());
          }
          if (response.status == 'fail') {
            await dispatch(errorInfo(response.error));
          }
        } else {
          await dispatch(
            errorInfo(
              'Không thể kết nối với máy chủ, xin vui lòng thử lại sau!',
            ),
          );
        }
      } else {
        await dispatch(errorInfo('Bad request'));
      }
    };
  } catch (error) {
    dispatch(errorInfo('Bad request'));
  }
};
