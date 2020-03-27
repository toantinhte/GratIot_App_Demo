import {
  STARTDEVICE,
  SUCCESSDEVICE,
  ERRORDEVICE,
  ADDLISTDEVICE,
  ADDDEVICE,
  EDITDEVICE,
  DELETEDEVICE,
  DEFAULTDEVICE,
} from '../../types/app/device';
import {on, emit} from '../../socket';
import AsyncStorage from '@react-native-community/async-storage';
const start = () => ({
  type: STARTDEVICE,
});

const success = () => ({
  type: SUCCESSDEVICE,
});

const error = error => ({
  type: ERRORDEVICE,
  error: error,
});

const add = device => ({
  type: ADDDEVICE,
  device: device,
});

const addList = listDevice => ({
  type: ADDLISTDEVICE,
  listDevice: listDevice,
});
const edit = device => ({
  type: EDITDEVICE,
  device: device,
});

const del = deviceId => ({
  type: DELETEDEVICE,
  deviceId: deviceId,
});

const defaultDevice = () => ({
  type: DEFAULTDEVICE,
});
export const sendDataListDevice = (page = 1) => {
  try {
    return async dispatch => {
      const userId = await AsyncStorage.getItem('userId');
      emit('listDevice', {page: page, userId:userId});
    };
  } catch (err) {
    console.log(err);
  }
};

export default addListDevice = () => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      on('listDevice', async response => {
        if (response) {
          if (JSON.parse(response).status == 'success') {
              await dispatch(addList(JSON.parse(response).result));
          }
          if (JSON.parse(response).status == 'fail') {
            await dispatch(error(JSON.parse(response).error));
          }
          await dispatch(success());
        } else {
          await dispatch(error('Request bad'));
        }
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const addDevice = device => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      emit('addDevice',{...device});
      //if resposne return
      await dispatch(add(device));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const editDevice = device => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      emit('editDevice',{...device});
      //if resposne return
      await dispatch(edit(device));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const deleteDevice = deviceId => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      emit('delDevice',{id:deviceId});
      //if resposne return
      await dispatch(del(deviceId));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const refreshDevice = () => {
  try {
    return async dispatch => {
      await dispatch(start());
      await dispatch(defaultDevice());
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};
