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

const nameInitialState = {
    error:null,
    loading:false,
    data:[],
};
export default deviceInfoReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case ADDLISTDEVICEINFO:
      var newData = state.data;
      action.listDeviceInfo.forEach(element => {
        newData[element.deviceId] = element;
      });
      return {...state, data:newData};
    case EDITDEVICEINFO:
        state.data[action.deviceInfo.deviceId] = action.deviceInfo;
      return {...state};
    default:
      return state;
  }
};
