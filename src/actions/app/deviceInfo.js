import {
  STARTDEVICEINFO,
  ERRORDEVICEINFO,
  SUCCESSDEVICEINFO,
  ADDDEVICEINFO,
  ADDLISTDEVICEINFO,
  EDITDEVICEINFO,
  DEFAULTDEVICEINFO,
  DELETEDEVICEINFO,
} from '../../types/app/deviceInfo';
import {on, emit} from '../../socket';

const addList = listDeviceInfo => ({
  type: ADDLISTDEVICEINFO,
  listDeviceInfo: listDeviceInfo,
});

const edit = deviceInfo => ({
  type: EDITDEVICEINFO,
  deviceInfo: deviceInfo,
});

export const sendDataListDeviceInfo = () => {
    try {
        return async dispatch => {
          await emit('listDeviceInfo');
        };
      } catch (err) {
        console.log(err);
      }
}

export default addListDeviceInfo = () => {
  try {
    return async dispatch => {
      await on('listDeviceInfo', async data => {
          console.log(data);
          if(data){
              if(JSON.parse(data).status =='success'){
                  dispatch(addList(JSON.parse(data).result));
              }
              if(JSON.parse(data).status == 'fail'){
              }
          }
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const sendDataEditDeviceInfo = (deviceInfo) => {
    try {
        return async dispatch => {
            console.log(deviceInfo);
          await emit('editDeviceInfo', deviceInfo);
        };
      } catch (err) {
        console.log(err);
      }
}

export const editDeviceInfo = () => {
    try {
        return async dispatch => {
          await on('editDeviceInfo', async data => {
              console.log(data);
              if(data){
                  if(JSON.parse(data).status =='success'){
                      dispatch(edit(JSON.parse(data).result));
                  }
                  if(JSON.parse(data).status == 'fail'){
                  }
              }
          });
        };
      } catch (err) {
        console.log(err);
      }
}
