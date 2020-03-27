import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
//Icon for tab
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Feather';

//Tab
import Profile from './Profile';
import Home from './Home';
import Scene from './Scene';
import Device from './Device';

//Stack
import ManagerHouse from '../app/Home/ManagerHouse';
import AddHouse from '../app/Home/AddHouse';
import EditHouse from '../app/Home/EditHouse';

import ManagerRoom from './Home/ManagerRoom';
import EditRoom from './Home/EditRoom';

import AddDevice from '../../components/AddDevice';
import AddDevice2 from '../../components/AddDevice2';
import AddDevice3 from '../../components/AddDevice3';
import AddDevice4 from '../../components/AddDevice4';
import AddDevice5 from '../../components/AddDevice5';
import RemoteDevice from '../app/Device/remoteDevice';
import EditDevice from '../app/Device/EditDevice';
import ActionForDevice from '../app/Device/ActionForDevice';
import ActionDetail from '../app/Device/ActionDetail';
import ColorPicker from '../../components/ColorPicker';

import AddSence from '../../components/AddSence';
import AddSence2 from '../../components/AddSence2';
import ListImage from '../../components/ListImage';
import Condition from '../../components/Condition';
import Actions from '../../components/Actions';
import Alarm from '../app/Device/Alarm';
import ListAlarm from '../app/Device/ListAlarm';
import History from '../app/Device/Histories';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function TabBottom() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let color = focused ? 'rgb(0, 145, 187)' : 'black';
          if (route.name == 'Home')
            return <Icon1 name={'home'} size={30} color={color} />;
          if (route.name == 'Profile')
            return <Icon1 name={'user'} size={30} color={color} />;
          if (route.name == 'Device')
            return <Icon2 name={'devices-other'} size={30} color={color} />;
          if (route.name == 'Scene')
            return <Icon3 name={'layers'} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'rgb(0, 145, 187)',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Device" component={Device} />
      <Tab.Screen name="Scene" component={Scene} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Stack.Navigator headerMode={null}>
      
      <Stack.Screen name="TabBottom" component={TabBottom} />
      <Stack.Screen name="ManagerHouse" component={ManagerHouse} />
      <Stack.Screen name="AddHouse" component={AddHouse} />
      <Stack.Screen name="EditHouse" component={EditHouse} />
      <Stack.Screen name="ManagerRoom" component={ManagerRoom} />
      <Stack.Screen name="EditRoom" component={EditRoom} />

      <Stack.Screen name="AddDevice" component={AddDevice} />
      <Stack.Screen name="AddDevice2" component={AddDevice2} />
      <Stack.Screen name="AddDevice3" component={AddDevice3} />
      <Stack.Screen name="AddDevice4" component={AddDevice4} />
      <Stack.Screen name="AddDevice5" component={AddDevice5} />
      <Stack.Screen name="EditDevice" component={EditDevice} />
      <Stack.Screen name="RemoteDevice" component={RemoteDevice} />
      <Stack.Screen name="ActionForDevice" component={ActionForDevice} />
      <Stack.Screen name="ActionDetail" component={ActionDetail} />
      <Stack.Screen name="ColorPicker" component={ColorPicker} />

      <Stack.Screen name="ListImage" component={ListImage} />
      <Stack.Screen name="AddSence" component={AddSence} />
      <Stack.Screen name="AddSence2" component={AddSence2} />
      <Stack.Screen name="Condition" component={Condition} />
      <Stack.Screen name="Actions" component={Actions} />
      <Stack.Screen name="Alarm" component={Alarm} />
      <Stack.Screen name="ListAlarm" component={ListAlarm} />
      <Stack.Screen name="History" component={History} />

    </Stack.Navigator>
  );
}
