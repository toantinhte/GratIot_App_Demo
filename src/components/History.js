import React from 'react';
import {Text, View, ScrollView, Dimensions, StyleSheet} from 'react-native';
import Header from './HeadControll';
import ButtonNextRight from './ButtonNextRight';

const widthScreen = Dimensions.get('screen').width;

function ItemHistory({time = new Date(), description, note, bgColor}) {
  const {col1, col2, col3, bgItem} = styles;
  return (
    <View style={{...bgItem, backgroundColor:bgColor}}>
      <Text style={{...col1,textAlign:'left'}}>{time}</Text>
      <Text style={col2}>{description}</Text>
      <Text style={col3}>{note}</Text>
    </View>
  );
}

export default function History({navigation, route, histories}) {
  const {navigate, goBack} = navigation;
  const {id, deviceName, roomId, status, actions} = route.params;
  const {col1, col2, col3, bgListHistories, bgThead} = styles;
  return (
    <>
      <Header onLeft={goBack} nameScreen={'Lịch sử'}/>
      {actions.length > 1 ? (
          <ButtonNextRight
            title={'Hành động'}
            onPress={() => navigate('ActionForDevice', {...route.params})}
          />
        ) : (
          <ButtonNextRight
            title={actions[0].name}
            onPress={() => navigate('ActionDetail', {...actions[0],deviceId:id})}
          />
        )}
      <View style={bgListHistories}>
        <View style={bgThead}>
          <Text style={{...col1, fontWeight: '400'}}>Thời gian</Text>
          <Text style={{...col2, fontWeight: '400'}}> Trạng thái</Text>
          <Text style={{...col3, fontWeight: '400'}}>Cách thức</Text>
        </View>
        <ScrollView
          contentContainerStyle={{justifyContent: 'center', width: '100%'}}>
          {histories[id]?histories[id].map((item, index)=> (
            <ItemHistory
              key={index}
              width={widthScreen - 20}
              height={60}
              time={item.time}
              description={item.status == 0 ? 'Tắt' : 'Bật'}
              note={item.method}
              bgColor={index%2==0?'rgba(255,255,255, 0.9)':null}
            />
          )):null}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  col1: {flex: 3, textAlign: 'center', paddingLeft:5},
  col2: {flex: 2, textAlign: 'center', paddingLeft:5},
  col3: {flex: 2, textAlign: 'center', paddingLeft:5},
  bgListHistories: {
    width: widthScreen - 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'rgb(200,200,200)',
    borderWidth: 1,
    marginVertical: 10,
  },
  bgThead: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    borderBottomColor: 'rgb(200,200,200)',
    alignItems: 'center',
    borderBottomWidth: 1,
    width: widthScreen - 20,
  },
  bgItem: {
    flexDirection: 'row',
    width: widthScreen - 20,
    height: 60,
    alignItems: 'center',
  },
});
