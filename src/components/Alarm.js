import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity, Dimensions, FlatList, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Header from './HeadControll';
import BgApp from './BgApp';
import ButtonNextRight from './ButtonNextRight';
import Button from './Button';
import Input from './Input';
import Error from './Error';

const widthScreen = Math.round(Dimensions.get('window').width);
const days = [
  {id: 1, name: 'Thứ 2', value: 2},
  {id: 2, name: 'Thứ 3', value: 3},
  {id: 3, name: 'Thứ 4', value: 4},
  {id: 4, name: 'Thứ 5', value: 5},
  {id: 5, name: 'Thứ 6', value: 6},
  {id: 6, name: 'Thứ 7', value: 7},
  {id: 7, name: 'Chủ nhật', value: 'CN'},
];

function ItemDay({day, onPress}) {
  const [isSelected, setSelection] = React.useState(false);
  const onSelect = () => {
    setSelection(!isSelected);
    if (onPress) {
      !isSelected
        ? onPress({...day, status: 'success'})
        : onPress({...day, status: 'fail'});
    }
  };
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{
        width: 100,
        height: 30,
        justifyContent: 'center',
        backgroundColor: isSelected ? 'rgb(0, 145, 187)' : 'white',
        borderRadius: 20,
        marginLeft: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'rgb(0, 145, 187)',
      }}>
      <Text
        style={{
          padding: 10,
          textAlign: 'center',
          fontSize: 14,
          color: isSelected ? 'white' : 'black',
        }}>
        {day.name}
      </Text>
    </TouchableOpacity>
  );
}

function ActionIsSelect({type, value}) {
  switch (type) {
    case 'power':
      return value==1?'Bật':'Tắt';
    case 'color':
      return (
      <Text style={{padding:10,backgroundColor:value, color:'white'}}>{value}</Text>
      );
  }
}

export default function listAlarm({navigation, route, addAlarm, deviceInfo}) {
  const {navigate, goBack} = navigation;
  const [listDay, setListDay] = React.useState([]);
  const [option, setOption] = React.useState(1);
  const [date, setDate] = React.useState(new Date());
  const [note, setNote] = React.useState(null);
  const [alarmName, setAlarmName] = React.useState(null);
  const [error, setError] = React.useState(null);
  const {id, deviceName, actions} = route.params;
  const onSelect = async value => {
    if (value.status == 'success') {
      await setListDay([...listDay, value.value]);
    }
    if (value.status == 'fail') {
      const newDay = await listDay.filter(item => {
        return item != value.value;
      });
      await setListDay(newDay);
    }
  };
  const onSaveAlarm = async () => {
    if (checkAlarmName(alarmName) && checkDays(listDay)) {
     await addAlarm({
        alarmName: alarmName,
        status: 1,
        note: note,
        option: option,
        days: listDay,
        deviceId: id,
        hours: date.getHours(),
        minutes: date.getMinutes(),
      });
    await goBack();
    }
  };

  const changeNote = note => {
    setNote(note);
  }

  const checkAlarmName = alarmName => {
    if (alarmName) {
      setError(null);
      return true;
    } else {
      setError('Vui lòng điền tên báo thức!');
      return false;
    }
  };

  const checkDays = days => {
    if (days.length >= 1) {
      setError(null);
      return true;
    } else {
      setError('Vui lòng chọn ngày báo thức!');
      return false;
    }
  };

  const onChangeAlarmName = alarmName => {
    if (alarmName) {
      setAlarmName(alarmName);
      setError(null);
    } else {
      setError('Tên báo thức không hợp lệ!');
    }
  };

  const redirectAction = () => {
    if (actions.length > 1) {
      navigate('ActionForDevice', {...route.params});
    } else {
      navigate('ActionDetail', {...actions[0], deviceId:id});
    }
  };
  const {bg, bgInput, bgActionButton, bgSelectionAlarm} = styles;
  return (
    <>
      <Header
        nameScreen={deviceName}
        onLeft={goBack}
        titleRight={'Lưu'}
        onRight={onSaveAlarm}
      />
      <BgApp />
      <View style={bg}>
        <Error error={error} />
        <View style={bgInput}>
          <Input
            placeholder={'Enter name'}
            width={widthScreen - 20}
            height={40}
            onChange={onChangeAlarmName}
          />
          <Input placeholder={'Note'} width={widthScreen - 20} height={40} onChange={changeNote} />
        </View>
        <View style={bgSelectionAlarm}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
            }}>
            <Button
              borderRadius={0}
              title={'Lặp lại'}
              color={option == 1 ? 'rgb(0, 145, 187)' : 'rgb(200,200,200)'}
              width={(widthScreen - 20) / 2}
              onPress={() => setOption(1)}
              disabled={false}
            />
            <Button
              borderRadius={0}
              title={'Một lần '}
              color={option == 0 ? 'rgb(0, 145, 187)' : 'rgb(200,200,200)'}
              width={(widthScreen - 20) / 2}
              onPress={() => setOption(0)}
              disabled={false}
            />
          </View>
          <FlatList
            data={days}
            numColumns={Math.floor(widthScreen / 120)}
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 20,
            }}
            renderItem={({item}) => (
              <ItemDay key={item.id} onPress={onSelect} day={item} />
            )}
          />
          <DatePicker
            mode={'time'}
            date={date}
            onDateChange={value => {
              setDate(value);
            }}
          />
        </View>
        <View style={bgActionButton}>
          <ButtonNextRight
            title={actions.length > 1 ? 'Hành động' : actions[0].name}
            onPress={redirectAction}
            value={actions.length <= 1? <ActionIsSelect type={actions[0].type}
            value={deviceInfo.data[id].actions[actions[0].type]}/>:null}
          />
        </View>
      </View>
      <BgApp />
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: widthScreen - 20,
    marginVertical: 20,
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
  },
  bgActionButton: {
    overflow: 'hidden',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: '100%',
  },
  bgSelectionAlarm: {
    backgroundColor: 'white',
    overflow: 'hidden',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 20,
  },
  bgInput: {
    overflow: 'hidden',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
