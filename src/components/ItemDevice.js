import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import deviceImage from '../publics/images/congTacWifi.jpg';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {sendDataEditDeviceInfo,} from '../actions/app/deviceInfo';

function deviceItem({
  onCheckOutDevice,
  onPressButton,
  title = 'card',
  urlImage = deviceImage,
  width = 160,
  height = 120,
  bgColor = 'white',
  fontSize = 14,
  color = 'black',
  deviceInfo,
  deviceId,
  editDeviceInfo
}) {
  const {data, error, loading} = deviceInfo;
  const styles = StyleSheet.create({
    bgItem: {
      width: Number(width),
      height: Number(height),
      backgroundColor: bgColor,
      margin: 10,
      borderRadius: 20,
      overflow: 'hidden',
    },
    titleStyle: {
      flex: 1,
      textAlign: 'center',
      backgroundColor: 'rgb(200,200,200)',
      fontSize: fontSize,
      color: color,
    },
    imageAndOffButton: {
      padding: 10,
      flex: 3,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });

  const onPress = () => {
    if(data[deviceId].actions.power == '1'){
      editDeviceInfo({
        ...data[deviceId],
        actions:{...data[deviceId].actions,power:'0'}
      })
    }else{
      editDeviceInfo({
        ...data[deviceId],
        actions:{...data[deviceId].actions,power:'1'}
      })
    }
  };

  const onPress2 = () => {
    if (onCheckOutDevice) onCheckOutDevice();
  };

  const {bgItem, titleStyle, imageAndOffButton} = styles;
  return (
    <TouchableOpacity style={bgItem} onPress={onPress2}>
      <Text style={titleStyle}>{title}</Text>
      <View style={imageAndOffButton}>
        <Image style={{width: 80, height: 60}} source={urlImage} />
        <TouchableOpacity onPress={onPress}>
          <Icon
            name={'poweroff'}
            size={30}
            color={
              data[deviceId] &&
              data[deviceId].actions.power == 1
                ? 'rgb(0, 145, 187)'
                : 'black'
            }
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const mapStateToProps = state => {
  return {
    deviceInfo: state.deviceInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editDeviceInfo: (deviceInfo) => {
      dispatch(sendDataEditDeviceInfo(deviceInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(deviceItem);
