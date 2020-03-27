import {
  ADDHOUSE,
  EDITHOUSE,
  DELETEHOUSE,
  STARTHOUSE,
  SUCCESSHOUSE,
  ERRORHOUSE,
  SELECTEDHOUSE,
  DEFAULTHOUSE,
  ADDLISTHOUSE,
} from '../../types/app/house';
import AsyncStorage from '@react-native-community/async-storage';
import {on, emit} from '../../socket';
import {sendDataRoom} from './room';

const start = () => ({
  type: STARTHOUSE,
});

const success = () => ({
  type: SUCCESSHOUSE,
});

const error = error => ({
  type: ERRORHOUSE,
  error: error,
});

const selected = houseId => ({
  type: SELECTEDHOUSE,
  houseId: houseId,
});

const add = house => ({
  type: ADDHOUSE,
  house: house,
});

const edit = house => ({
  type: EDITHOUSE,
  house: house,
});

const addList = listHouse => ({
  type: ADDLISTHOUSE,
  listHouse: listHouse,
});

const del = houseId => ({
  type: DELETEHOUSE,
  houseId: houseId,
});

const defaultHouse = () => ({
  type: DEFAULTHOUSE,
});

export const sendDataListHouse = () => {
  try{
    return async  dispatch => {
     const userId = await AsyncStorage.getItem('userId');
     if(userId){
      await emit('listHouse', {userId: userId});
     }
    }
  }catch(err){
    console.log(err);
  }
}

export default addListHouse = () => {
  try {
    return async dispatch => {
      // await dispatch(start());
      //send request to server
      on('listHouse', async res => {
        if (res) {
          if (JSON.parse(res).status == 'success') {
            await dispatch(addList(JSON.parse(res).result));
            const houseIsSelected = await AsyncStorage.getItem('houseId');
            if (!houseIsSelected) {
              await dispatch(selectHouse(JSON.parse(res).result[0].id));
            }else{
              await dispatch(selectHouse(houseIsSelected));
            }
          }
          if (JSON.parse(res).status == 'fail') {
            await dispatch(error(JSON.parse(res).error));
          }
          await dispatch(success());
        } else {
          await dispatch(error('Network fail'));
        }
      });
    };
  } catch (err) {
    console.log(err);
  }
};

export const addHouse = house => {
  try {
    return async dispatch => {
      await dispatch(start());
      await dispatch(add(house));
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};

export const editHouse = house => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      //if resposne return
      await dispatch(success());
      await dispatch(edit(house));
    };
  } catch (err) {
    console.log(err);
  }
};

export const deleteHouse = houseId => {
  try {
    return async dispatch => {
      await dispatch(start());
      //send request to server
      //if resposne return
      await dispatch(success());
      await dispatch(del(houseId));
    };
  } catch (err) {
    console.log(err);
  }
};

export const selectHouse = houseId => {
  try {
    return async dispatch => {
      await dispatch(start());
      //save to session
      await AsyncStorage.setItem('houseId',houseId);
      await dispatch(sendDataRoom(houseId));
      //if resposne return
      await dispatch(success());
      await dispatch(selected(houseId));
    };
  } catch (err) {
    console.log(err);
  }
};
export const resetHouse = houseId => {
  try {
    return async dispatch => {
      await dispatch(start());
      await dispatch(defaultHouse());
      await dispatch(success());
    };
  } catch (err) {
    console.log(err);
  }
};
