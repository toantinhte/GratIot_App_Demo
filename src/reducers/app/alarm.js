import {
  STARTALARM,
  SUCCESSALARM,
  ERRORALARM,
  ADDALARM,
  ADDLISTALARM,
  DELETEALARM,
  EDITALARM,
  DEFAULTALARM,
} from '../../types/app/alarm';
const nameInitialState = {
  loading: false,
  error: null,
  data: [],
};
export default alarmReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case STARTALARM:
      return {...state, loading: true};
    case ERRORALARM:
      return {...state, loading: false, error: action.error};
    case SUCCESSALARM:
      return {...state, loading: false, error: null};
    //add follow deviceId
    case ADDLISTALARM:
      const newData = state.data;
      if (action.listAlarm.length >= 1) {
        newData[action.listAlarm[0].deviceId] = action.listAlarm;
      }
      return {...state, data: newData};
    case ADDALARM:
      // //Selection 1
      // //Get list devices will be added
      // const listIsAdd = state.data[action.device.houseId];
      // //Add device into list devices have been gotten
      // const newlistIsAdd = [...listIsAdd, action.device];
      // //Create a new old data
      // const newDataIsAdd = [...state.data];
      // //Add list devices have been added
      // newDataIsAdd[action.device.houseId] = newlistIsAdd;
      // //return new state
      //--------------------------------------------------------------------------------------------------------------------
      //Selection2
      //Map data then get list devices follow houseid then return new list devices
      console.log(action.alarm);
      const newListDataIsAdd = state.data[action.alarm.deviceId];
      if(newListDataIsAdd){
        newListDataIsAdd.push(action.alarm);
      }else{
        state.data[action.alarm.deviceId] = [action.alarm];
      }
      return {...state};
    case EDITALARM:
      //Get list devices will be edited
      const listAlarmIsEdit = [...state.data[action.device.deviceId]];
      // Find item is edited and edit
      const newListAlarmIsEdit = listAlarmIsEdit.map(item => {
        if (item.id == action.alarm.id) {
          return {...item, ...action.alarm};
        }
        return item;
      });
      //Create new data
      const newDataIsEdit = [...state.data];
      //editting
      newDataIsEdit[action.alarm.deviceId] = newListAlarmIsEdit;
      //return new state
      return {...state, data: newDataIsEdit};
    case DELETEALARM:
      const listAlarmIsDel = state.data[action.deviceId];
      const newListAlarmIsDel = listAlarmIsDel.filter(item => {
        return item.id != action.deviceId;
      });
      const newDataIsDel = [...state.data];
      newDataIsDel[action.deviceId] = newListAlarmIsDel;
      return {...state, data: newDataIsDel};
    // case DEFAULTALARM:
    //   return {...state, data:null, loading:false, error:null}
    default:
      return state;
  }
};
