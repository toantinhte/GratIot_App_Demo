import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function TabRoom({data, component, houseIsSelected}) {
  const styleTab = {
    labelStyle: {fontSize: 14, textTransform: 'capitalize'},
    tabStyle: {width: 120, height: 50},
    scrollEnabled: true,
    activeTintColor: 'rgb(0, 145, 187)',
    inactiveTintColor: 'black',
    indicatorStyle: {
      backgroundColor: 'rgb(0, 145, 187)',
    },
  };

  return (
    <>
      {data && data[houseIsSelected] && data[houseIsSelected].length > 0 ? (
        <Tab.Navigator tabBarOptions={styleTab} lazy={true}>
          {data[houseIsSelected].map(item => {
            return (
              <Tab.Screen
                options={{tabBarLabel: item.roomName}}
                key={item.id}
                name={item.roomName + '_' + item.id}
                component={component}
              />
            );
          })}
        </Tab.Navigator>
      ) : (
        <View>
          <Text>Đang cập nhật...</Text>
        </View>
      )}
    </>
  );
}
