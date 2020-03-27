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
const nameInitialState = {
  error: null,
  loading: false,
  data: [
    // {id: 1, deviceName: 'Thiết bị 1', deviceModel: 'ap1', roomId: 0,status:0, userId:1,},
    // {id: 2, deviceName: 'Thiết bị 2', deviceModel: 'ap1', roomId: 1,status:1, userId:1,},
    // {id: 3, deviceName: 'Thiết bị 3', deviceModel: 'ap1', roomId: 2,status:0, userId:1,},
  ],
};
export default deviceReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case STARTDEVICE:
      return {...state, loading: true, error: null};
    case SUCCESSDEVICE:
      return {...state, loading: false, error: null};
    case ERRORDEVICE:
      return {...state, loading: false, error: action.error};
    case ADDLISTDEVICE:
      console.log(action.listDevice);
      if(action.listDevice.length > 0 ){
        return {...state, data: [...state.data, ...action.listDevice]};
      }
    case ADDDEVICE:
      if (action.device) {
        return {...state, data: [...state.data, action.Device]};
      }
      return {...state};
    case EDITDEVICE:
      const newDataIsEdit = state.data.map(item => {
        if (item.id == action.device.id) {
          return {...item, ...action.device};
        }
        return item;
      });
      return {...state, data: newDataIsEdit};
    case DELETEDEVICE:
      const newDataIsDel = state.data.filter(item => {
        if (item) {
          return item.id != action.deviceId;
        }
      });
      return {...state, data: newDataIsDel};
    case DEFAULTDEVICE:
      return {...state, loading: true, error: null, data: []};
    default:
      return state;
  }
};
