import React, {Component} from 'react';
import {FlatList} from 'react-native';
import ButtonNextRight from './ButtonNextRight';
import Header from './HeadControll';

export default function Condition({navigation, route}) {
  const {navigate, goBack} = navigation;
  const condition = [
    {name:'Thiết bị',id:0},
    {name:'Thời gian có hiệu lực',id:1},
    {name:'Thời tiết ở nhà',id:2},
    {name:'Hẹn giờ',id:3},
  ];

  return (
    <>
      <Header nameScreen={'Chọn điều kiện'} onLeft={goBack} />
      <FlatList
        data={condition}
        renderItem={({item}) => <ButtonNextRight key={item.id} title={item.name} />}
        contentContainerStyle={{marginTop: 10}}
      />
    </>
  );
}
