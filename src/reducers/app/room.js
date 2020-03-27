import {
  ADDROOM,
  ADDLISTROOM,
  EDITROOM,
  DELETEROOM,
  STARTROOM,
  SUCCESSROOM,
  ERRORROOM,
  DEFAULTROOM
} from '../../types/app/room';

const nameInitialState = {
  error: null,
  loading: false,
  data: [],
};
export default roomReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case STARTROOM:
      return {...state, loading: true};
    case ERRORROOM:
      return {...state, loading: false, error: action.error};
    case SUCCESSROOM:
      return {...state, loading: false, error: null};
    //add follow houseId
    case ADDLISTROOM:
      const newData = [...state.data];
      if(action.listRoom && action.listRoom.length > 0){
        newData[action.listRoom[0]['houseId']] = action.listRoom;
      }
      return {...state, data: newData};
    case ADDROOM:
      // //Selection 1
      // //Get list rooms will be added
      // const listRoomIsAdd = state.data[action.room.houseId];
      // //Add room into list rooms have been gotten
      // const newlistRoomIsAdd = [...listRoomIsAdd, action.room];
      // //Create a new old data
      // const newDataIsAdd = [...state.data];
      // //Add list rooms have been added
      // newDataIsAdd[action.room.houseId] = newlistRoomIsAdd;
      // //return new state
      //--------------------------------------------------------------------------------------------------------------------
      //Selection2
      //Map data then get list rooms follow houseid then return new list rooms
      const newDataIsAdd = state.data.map((item, index) => {
        if (index == action.room.houseId) {
          return [...item, action.room];
        }
        return item;
      });

      return {...state, data: newDataIsAdd};
    case EDITROOM:
      //Get list rooms will be edited
      const listRoomIsEdit = [...state.data[action.room.houseId]];
      // Find item is edited and edit
      const newListRoomIsEdit = listRoomIsEdit.map(item => {
        if (item.id == action.room.id) {
          return {...item, ...action.room};
        }
        return item;
      });
      //Create new data
      const newDataIsEdit = [...state.data];
      //editting
      newDataIsEdit[action.room.houseId] = newListRoomIsEdit;
      //return new state
      return {...state, data: newDataIsEdit};
    case DELETEROOM:
      const listRoomIsDel = state.data[action.houseId];
      const newListRoomIsDel = listRoomIsDel.filter(item => {
        return item.id != action.roomId;
      });
      const newDataIsDel = [...state.data];
      newDataIsDel[action.houseId] = newListRoomIsDel;
      return {...state, data: newDataIsDel};
      case  DEFAULTROOM:
        return {...state, error:null, loading:false, data:null}
    default:
      return state;
  }
};
