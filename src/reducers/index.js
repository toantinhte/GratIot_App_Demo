import {combineReducers} from 'redux';

//auth
import authReducer from './auth/auth';

//app
import statusReducer from './app/status';
import houseReducer from './app/house';
import roomReducer from './app/room';
import deviceRoomReducer from './app/deviceRoom';
import deviceReducer from './app/device';
import historyReducer from './app/histories';
import actionReducer from './app/action';
import alarmReducer from './app/alarm';
import deviceInfoReducer from './app/deviceInfo';

export default reducers = combineReducers({
  //auth
  auth: authReducer,

  //app
  status: statusReducer,
  room: roomReducer,
  deviceRoom:deviceRoomReducer,
  house: houseReducer,
  device: deviceReducer,
  history: historyReducer,
  action:actionReducer,
  alarm: alarmReducer,
  deviceInfo: deviceInfoReducer,
});
