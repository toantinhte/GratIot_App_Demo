import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Avatar from '../../../components/Avatar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../../components/Button';

export default function Profile({statusApp, logout}) {
    const {loading, infoUser, error} = statusApp;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          marginBottom: 10,
          width: '100%',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Avatar />
        <Text
          style={{
            color: 'rgb(200,200,200)',
            marginVertical: 10,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
              {infoUser?`(+${infoUser.callingCode}) ${infoUser.phone}`:'Đang cập nhật...'}
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '50%',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            borderBottomColor: 'rgb(200,200,200)',
            height: 50,
            backgroundColor: 'white',
            width: '100%',
            borderBottomWidth: 1,
          }}>
          <Text>Thay đổi mật khẩu</Text>
          <Icon name={'angle-right'} size={20} color={'rgb(200,200,200)'} />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            width: '100%',
            height: 50,
            paddingLeft: 10,
            opacity: 0.3,
          }}>
          <Text>Phản hồi</Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            height: 50,
            backgroundColor: 'white',
            width: '100%',
          }}>
          <Text>Phiên bản ứng dụng</Text>
          <Text style={{color: 'rgb(200,200,200)'}}>1.0.0(v62)</Text>
        </TouchableOpacity>
        <Button
          title={'Đăng xuất'}
          disabled={false}
          marginVertical={20}
          loading={statusApp.loading}
          onPress={logout}
        />
      </View>
    </View>
  );
}
