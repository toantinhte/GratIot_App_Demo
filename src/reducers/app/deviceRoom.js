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

const nameInitialState = {
  error: null,
  loading: false,
  data: [],
};
export default deviceRoomReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case STARTDEVICEROOM:
      return {...state, loading: true};
    case ERRORDEVICEROOM:
      return {...state, loading: false, error: action.error};
    case SUCCESSDEVICEROOM:
      return {...state, loading: false, error: null};
    //add follow roomId
    case ADDLISTDEVICEROOM:
      const newData = state.data;
      if (action.listDevice.length >= 1) {
        newData[action.listDevice[0].roomId] = action.listDevice;
      }
      return {...state, data: newData};
    case ADDDEVICEROOM:
      // //Selection 1
      // //Get list devices will be added
      // const listRoomIsAdd = state.data[action.device.houseId];
      // //Add device into list devices have been gotten
      // const newlistRoomIsAdd = [...listRoomIsAdd, action.device];
      // //Create a new old data
      // const newDataIsAdd = [...state.data];
      // //Add list devices have been added
      // newDataIsAdd[action.device.houseId] = newlistRoomIsAdd;
      // //return new state
      //--------------------------------------------------------------------------------------------------------------------
      //Selection2
      //Map data then get list devices follow houseid then return new list devices
      const newDataIsAdd = state.data.map((item, index) => {
        if (index == action.device.roomId) {
          return [...item, action.device];
        }
        return item;
      });

      return {...state, data: newDataIsAdd};
    case EDITDEVICEROOM:
      //Get list devices will be edited
      const listDeviceRoomIsEdit = [...state.data[action.device.roomId]];
      // Find item is edited and edit
      const newListDeviceRoomIsEdit = listDeviceRoomIsEdit.map(item => {
        if (item.id == action.device.id) {
          return {...item, ...action.device};
        }
        return item;
      });
      //Create new data
      const newDataIsEdit = [...state.data];
      //editting
      newDataIsEdit[action.device.roomId] = newListDeviceRoomIsEdit;
      //return new state
      return {...state, data: newDataIsEdit};
    case DELETEDEVICEROOM:
      const listDeviceRoomIsDel = state.data[action.roomId];
      const newListDeviceRoomIsDel = listDeviceRoomIsDel.filter(item => {
        return item.id != action.deviceId;
      });
      const newDataIsDel = [...state.data];
      newDataIsDel[action.roomId] = newListDeviceRoomIsDel;
      return {...state, data: newDataIsDel};
    // case DEFAULTDEVICEROOM:
    //   return {...state, data:null, loading:false, error:null}
    default:
      return state;
  }
};
