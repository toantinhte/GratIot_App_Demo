import React from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import Header from './HeadControll';
import ColorPicker from './ColorPicker';
import Power from './Power';

function ActionIsSelect({type, values, deviceInfo, editDeviceInfo}) {
  switch (type) {
    case 'power':
      return values
        ? values.map((item, index) => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                alignItems: 'center',
                padding: 10,
              }}
              key={index}>
              <TouchableOpacity style={{marginRight: 10}}>
                <Power
                  color={
                    deviceInfo.actions.power == item.controll
                      ? 'rgb(0, 145, 187)'
                      : 'rgb(200,200,200)'
                  }
                  size={30}
                />
              </TouchableOpacity>
              <Text>{item.name}</Text>
            </View>
          ))
        : null;
    case 'color':
      return (
        <ColorPicker
          onColorSelected={color =>
            editDeviceInfo({
              ...deviceInfo,
              actions: {
                ...deviceInfo.actions,
                color: color,
              },
            })
          }
        />
      );
    case 'temperature':
      return <Text>Temperature</Text>;
    case 'Nhiệt độ':
      return <Text>Nhiệt độ</Text>;
    case 'Độ ẩm':
      return <Text>Độ ẩm</Text>;
    case 'voice':
      return <Text>Google voice</Text>;
    case 'humidity':
      return <Text>Humidity</Text>;
    default:
      return <Text>Chuc nang dang phat trien</Text>;
  }
}

export default function ActionDetail({
  navigation,
  route,
  listActions,
  deviceInfo,
  editDeviceInfo,
}) {
  const {type, name, deviceId} = route.params;
  const [values, setValues] = React.useState(null);
  const {navigate, goBack} = navigation;

  React.useEffect(() => {
    (async () => {
      const values = await listActions.filter(item => {
        return item.type == type;
      })[0].values;
      await setValues(values);
    })();
  }, []);

  return (
    <>
      <Header nameScreen={type} onLeft={goBack} />
      <ScrollView>
        <ActionIsSelect
          type={type}
          values={values}
          deviceInfo={deviceInfo.data[deviceId]}
          editDeviceInfo={editDeviceInfo}
        />
      </ScrollView>
    </>
  );
}
