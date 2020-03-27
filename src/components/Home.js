import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import ItemDevice from './ItemDevice';
import ItemAddDevice from './ItemAddDevice';
import * as RootNavigation from '../RootNavigation';
import BgApp from './BgApp';
import {slugTitle as slugURL} from '../handle';

export default function Home({
  navigation,
  route,
  sendDataDeviceRoom,
  deviceRoom,
}) {
  const [roomId, setRoomId] = React.useState(0);
  const {data, loading, error} = deviceRoom;
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    setRoomId(slugURL(route.name));
    sendDataDeviceRoom(slugURL(route.name));
  }, []);

  const handleRefresh = async () => {
    await setRefreshing(true);
    await sendDataDeviceRoom(roomId);
    await setRefreshing(loading);
  };

  const renderHeader = () => {
    if (!loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  return (
    <BgApp>
      <FlatList
        columnWrapperStyle={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        data={
          data[roomId]
            ? [...data[roomId], {id: 'Gnha1292000', deviceName: 'addDevice'}]
            : [{id: 'Gnha1292000', deviceName: 'addDevice'}]
        }
        numColumns={2}
        renderItem={({item, index}) => {
          if (item.deviceName == 'addDevice') {
            return <ItemAddDevice key={item.id} />;
          }
          return (
            <ItemDevice
              deviceId = {item.id}
              key={item.id}
              title={item.deviceName}
              onCheckOutDevice={() =>
                RootNavigation.navigate('RemoteDevice', {
                  ...item,
                })
              }
            />
          );
        }}
        ListHeaderComponent={renderHeader}
        onRefresh={handleRefresh}
        refreshing={refreshing}
      />
    </BgApp>
  );
}
