import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './HeadControll';
import ButtonNextRight from './ButtonNextRight';
import NotFound from './NotFound';

const widthScreen = Dimensions.get('screen').width;

function Item({title = 'title', onPress, isSelected}) {
  const onSelect = () => {
    if (onPress) onPress();
  };

  return (
    <View style={styles.bgButton} onPress={onSelect}>
      <View style={styles.bgHomeIcon}>
        <Icon
          name={'md-home'}
          size={25}
          color={isSelected ? 'rgb(0, 145, 187)' : 'black'}
        />
      </View>
      <ButtonNextRight
        width={widthScreen - 50}
        title={title}
        onPress={onPress}
      />
    </View>
  );
}

export default function ManagerHouse({
  data,
  houseIsSelected,
  navigation,
  route,
}) {
  const {navigate, goBack} = navigation;

  return (
    <>
      <Header
        nameScreen={'Quản lý nhà'}
        onLeft={goBack}
        onRight={() => {
          navigate('AddHouse');
        }}
        iconRight={
          <Icon name={'md-add'} size={20} color={'rgb(0, 145, 187)'} />
        }
      />
      <View style={{backgroundColor: 'white', marginTop: 10}}>
        {data ? (
          data.map(item => {
            if (item.id == houseIsSelected) {
              return (
                <Item
                  key={item.id}
                  title={item.houseName}
                  isSelected={true}
                  onPress={() => {
                    navigate('EditHouse', item);
                  }}
                />
              );
            }
            return (
              <Item
                key={item.id}
                title={item.houseName}
                onPress={() => {
                  navigate('EditHouse', item);
                }}
              />
            );
          })
        ) : (
          <NotFound note={'Không tìm thấy nhà.\n Vui lòng thêm nhà để tiếp tục!'}/>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bgButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  bgHomeIcon: {flex: 1, flexDirection: 'row', padding: 15},
  bgText: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(200,200,200)',
    padding: 15,
  },
  text: {fontSize: 16, fontWeight: '400'},
});
