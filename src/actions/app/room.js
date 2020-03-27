import {
  ADDROOM,
  ADDLISTROOM,
  EDITROOM,
  DELETEROOM,
  STARTROOM,
  SUCCESSROOM,
  ERRORROOM,
  DEFAULTROOM,
} from '../../types/app/room';
import {on, emit} from '../../socket';

const start = () => ({
  type: STARTROOM,
});

const success = () => ({
  type: SUCCESSROOM,
});

const error = error => ({
  type: ERRORROOM,
  error: error,
});

const add = room => ({
  type: ADDROOM,
  room: room,
});

const addList = listRoom => ({
  type: ADDLISTROOM,
  listRoom: listRoom,
});

const edit = room => ({
  type: EDITROOM,
  room: room,
});

const del = (roomId, houseId) => ({
  type: DELETEROOM,
  roomId: roomId,
  houseId: houseId,
});

const defaultRoom = () => ({
  type: DEFAULTROOM,
});

export const addRoom = room => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      //if resposne return
      await dispatch(add(room));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const editRoom = room => {
  console.log(room);
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      //if resposne return
      await dispatch(edit(room));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const deleteRoom = (roomId, houseId) => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      //if resposne return
      await dispatch(del(roomId, houseId));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const sendDataRoom = houseId => {
  try {
    return async dispatch => {
      await emit('listRoomHouse', {houseId: houseId});
    };
  } catch (err) {
    dispatch(error(err));
  }
};

export default addListRoom = () => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      await on('listRoomHouse', async response => {
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

export const resetRoom = () => {
  try {
    return async dispatch => {
      await dispatch(start());
      await dispatch(defaultRoom());
      await dispatch(success());
    };
  } catch (err) {
    dispatch(error(err));
  }
};
