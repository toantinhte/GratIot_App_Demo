import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Header from './HeadControll';
import BgApp from './BgApp';
import ItemDevice from './ItemDevice';
import AddButton from './AddButton';
import * as RootNavigation from '../RootNavigation';
import {setDate} from '../handle';

const widthScreen = Dimensions.get('screen').width;

export default function Device({
  device,
  editDevice,
  addHistory,
  sendDataListDevice,
  refreshDevice,
}) {

  const [page, setPage] = React.useState(2);
  const [refreshing, setRefreshing] = React.useState(false);
  const {loading, error, data} = device;
  const handleRefresh = async () => {
    await setRefreshing(loading);
    await refreshDevice();
    await sendDataListDevice(1);
    await setPage(1);
  };
  const handleLoadMore = async() => {
    await  sendDataListDevice(page+1);
    await setPage(page + 1);
  };
  const renderFooter = () => {
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

  const renderHeader = () => {
    if (!refreshing) return null;
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

  const onAddDevice = () => {
    RootNavigation.navigate('AddDevice');
  };

  const onRemoteDevice = device => {
    RootNavigation.navigate('RemoteDevice', {...device});
  };

  return (
    <>
      <Header
        iconLeft={<Text></Text>}
        titleLeft={''}
        iconRight={<AddButton onPress={onAddDevice} />}
      />
      <BgApp>
        <FlatList
          data={data}
          renderItem={({item}) => {
            if (item) {
              return (
                <ItemDevice
                  key={item.id}
                  deviceId={item.id}
                  title={item.deviceName}
                  onCheckOutDevice={() => onRemoteDevice(item)}
                  onPressButton={value => {
                    editDevice({...item, status: value});
                    addHistory({
                      id: 100,
                      time: setDate(),
                      method: 'Điện thoại',
                      deviceId: item.id,
                    });
                  }}
                />
              );
            }
          }}
          numColumns={Math.floor(widthScreen / 160)}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          onEndReached={handleLoadMore}
        />
      </BgApp>
    </>
  );
}
