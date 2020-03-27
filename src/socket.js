import io from 'socket.io-client';
import AsyncStorage from '@react-native-community/async-storage';

export default socket = (function() {
  var connection;

  const  connectting = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      return io('http://192.168.100.9:9999');
    }
  }

  return {
    getConnection: function() {
      if (!connection) {
        connection = connectting();
      }
      return connection;
    },
  };
})();

export const on = async (nameEvent = '', callBack) => {
  const connect = await socket.getConnection();
  if (connect) await connect.on(nameEvent, callBack);
};

export const emit = async (nameEvent = '', data = {}) => {
  const connect = await socket.getConnection();
  if (connect) await connect.emit(nameEvent, JSON.stringify(data));
};
