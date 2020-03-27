import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Header from './HeadControll';
import Icon from 'react-native-vector-icons/Ionicons';
import Switch from './Switch';
import CheckBox from './CheckBox';

function Item({
  hours = '00',
  minutes = '00',
  statusDefault = 0,
  onPress,
  onCheck,
  onLongPress,
  openCheckBox,
  alarmName = '',
  days = '',
  option = 1,
}) {
  const [status, setStatus] = React.useState(statusDefault);
  const changeStatus = value => {
    setStatus(value);
  };
  const bgItem = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(200,200,200)',
  };
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      style={bgItem}>
      <View>
        <Text style={{fontSize: 30}}>{`${hours}:${minutes}`}</Text>
        <Text>Trạng thái chuyển: {status == 1 ? 'Bật' : 'Tắt'}</Text>
        <Text>{`${alarmName}: ${days}`}</Text>
        <Text>{`Kiểu: ${option == 1 ? 'Lặp lại' : 'Một lần'}`}</Text>
      </View>
      <View>
        {openCheckBox ? (
          <CheckBox
            size={20}
            color={'orange'}
            colorActive={'red'}
            onCheck={onCheck}
          />
        ) : (
          <Switch size={80} valueDefault={status} onPress={changeStatus} />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default function Alarm({navigation, route, alarm}) {
  const {navigate, goBack} = navigation;
  const {deviceName, id} = route.params;
  const [listItem, setListItem] = React.useState([]);
  const [isDel, setisDel] = React.useState(false);
  const {data} = alarm;

  const onOpenSetupAlarm = () => {
    navigate('Alarm', {...route.params});
  };

  const onOpenDelete = () => {
    setisDel(true);
  };

  const addListDel = item => {
    setListItem([...listItem, item]);
  };

  const delAddListDel = async alarm => {
    const newListItem = await listItem.filter(item => {
      item.id != alarm.id;
    });
    await setListItem(newListItem);
  };

  const onDelete = () => {
    console.log(listItem);
  };
  const notDel = () => {
    setisDel(false);
  }

  return (
    <>
      <Header
        onLeft={isDel?notDel:goBack}
        titleLeft={isDel?'Không xóa':'Trở lại'}
        nameScreen={deviceName}
        iconRight={
          isDel ? (
            <Text style={{color: 'red'}}>Delete</Text>
          ) : (
            <Icon name={'md-add'} size={25} color={'rgb(0, 145, 187)'} />
          )
        }
        onRight={isDel ? onDelete : onOpenSetupAlarm}
      />
      {isDel ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            backgroundColor: 'white',
          }}>
          <Text style={{fontSize:20}}>Chọn tất cả</Text>
          <CheckBox size={20} color={'red'} colorActive={'red'} />
        </View>
      ) : null}
      <FlatList
        data={data[id]}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Item
            days={
              item.days.length >= 7 ? 'Hằng ngày' : `Thứ ${item.days.join()}`
            }
            option={item.option}
            key={`${item.id}`}
            statusDefault={item.status}
            hours={item.hours}
            minutes={item.minutes}
            openCheckBox={isDel}
            onLongPress={onOpenDelete}
            alarmName={item.alarmName}
            onCheck={async value => {
              if (value) {
                await addListDel(item);
              } else {
                await delAddListDel(item);
              }
            }}
          />
        )}
      />
    </>
  );
}
