import React, {Component} from 'react';
import {FlatList} from 'react-native';
import ButtonNextRight from './ButtonNextRight';
import Header from './HeadControll';

export default function Actions({navigation, route}) {
  const {navigate, goBack} = navigation;
  const condition = [
    {name:'Thiết bị',id:0},
    {name:'Kịch bản bấm tay',id:1},
    {name:'Thông báo qua ứng dụng GratioT',id:2},
    {name:'Thông báo qua sms',id:3},
    {name:'Thông báo qua gọi điện thoại',id:4},
  ];

  return (
    <>
      <Header nameScreen={'Chọn hành động'} onLeft={goBack} />
      <FlatList
        data={condition}
        renderItem={({item}) => <ButtonNextRight key={item.command} title={item.name} />}
        contentContainerStyle={{marginTop: 10}}
      />
    </>
  );
}
