import {
  STARTHISTORY,
  SUCCESSHISTORY,
  ERRORHISTORY,
  ADDLISTHISTORIES,
  ADDHISTORY,
  EDITHISTORY,
  DELETEHISTORY,
} from '../../types/app/histories';
const nameInitialState = {
  error: null,
  loading: false,
  data: [],
};
export default historyReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case STARTHISTORY:
      return {...state, loading: true, error: null};
    case SUCCESSHISTORY:
      return {...state, loading: false, error: null};
    case ERRORHISTORY:
      return {...state, loading: false, error: action.error};
    case ADDLISTHISTORIES:
      const newData = [...state.data];
      newData[action.histories[0]['deviceId']] = action.histories;
      return {...state, data: newData};
    case ADDHISTORY:
      if (state.data[action.history.deviceId]) {
        const newDataIsAdd = state.data.map((item, index) => {
          if (index == action.history.deviceId) {
            return [...item, action.history];
          }
          return item;
        });
        return {...state, data: newDataIsAdd};
      } else {
        const newDataIsAdd = [...state.data];
        newDataIsAdd[action.history.deviceId] = [action.history];
        return {...state, data: newDataIsAdd};
      }
    case DELETEHISTORY:
      const newDataIsDel = state.data.filter(item => {
        return item.id != action.historyId;
      });
      return {...state, data: newDataIsDel};
    default:
      return state;
  }
};
