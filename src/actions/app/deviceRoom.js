import {
  ADDDEVICEROOM,
  ADDLISTDEVICEROOM,
  EDITDEVICEROOM,
  DELETEDEVICEROOM,
  STARTDEVICEROOM,
  SUCCESSDEVICEROOM,
  ERRORDEVICEROOM,
  DEFAULTDEVICEROOM
} from '../../types/app/deviceRoom';
import {on, emit} from '../../socket';
import {addDevice, editDevice, deleteDevice} from './device';

const start = () => ({
  type: STARTDEVICEROOM,
});

const success = () => ({
  type: SUCCESSDEVICEROOM,
});

const error = error => ({
  type: ERRORDEVICEROOM,
  error: error,
});

const add = device => ({
  type: ADDDEVICEROOM,
  device: device,
});

const addList = listDevice => ({
  type: ADDLISTDEVICEROOM,
  listDevice: listDevice,
});

const edit = device => ({
  type: EDITDEVICEROOM,
  device: device,
});

const del = (deviceId, roomId) => ({
  type: DELETEDEVICEROOM,
  deviceId: deviceId,
  roomId: roomId,
});

const defaultDeviceRoom =()=>({
  type:DEFAULTDEVICEROOM,
})
export const addDeviceRoom = device => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      //add list device redux
      await dispatch(addDevice(device));
      //if resposne return
      await dispatch(add(device));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const editDeviceRoom = device => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      //edit list device in redux
      await dispatch(editDevice(device));
      //if resposne return
      await dispatch(edit(device));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const deleteDeviceRoom = (deviceId, roomId) => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      // delete device at list device in redux
      await dispatch(deleteDevice(deviceId));
      //if resposne return
      await dispatch(del(deviceId, roomId));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const sendData = (roomId = 0) => {
  try {
    return async dispatch => {
      await emit('listDeviceRoom', {roomId: roomId});
    };
  } catch (err) {
    dispatch(error(err));
  }
};

export default addListDeviceRoom = () => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      await on('listDeviceRoom', async response => {
        //if resposne return
        if (response) {
          if (JSON.parse(response).status == 'success') {
              await dispatch(addList(JSON.parse(response).result));
          }
          if (JSON.parse(response).status == 'fail') {
            await dispatch(error(JSON.parse(response).error));
          }
          await dispatch(success());
        }else{
          await dispatch(error('Bad request'));
        }
      });
    };
  } catch (err) {
    dispatch(error(err));
  }
};

export const resetDeviceRoom = () =>{
  try {
    return async dispatch => {
      await dispatch(start());
      await dispatch(defaultDeviceRoom());
      await dispatch(success());
    }
  } catch (err) {
    dispatch(error(err));
  }
}
