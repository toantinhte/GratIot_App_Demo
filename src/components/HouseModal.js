import React from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

function Item({title = 'title', onPress, selected = false}) {
  const onSelect = () => {
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity style={styles.bgButton} onPress={onSelect}>
      <View style={styles.bgHomeIcon}>
        <Icon name={'md-home'} size={25} />
      </View>
      <View style={styles.bgText}>
        <Text style={styles.text}>{title}</Text>
        {selected ? (
          <Icon name={'md-checkmark'} size={20} color={'rgb(0, 145, 187)'} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

export default function HouseModal({visible, data, selectHouse,houseIsSelected, onPress, onPress2}) {
  
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      presentationStyle={'overFullScreen'}>
      <TouchableHighlight style={styles.bg} onPress={onPress2}>
        <>
        <View
          style={{
            backgroundColor: 'white',
          }}>
          <TouchableOpacity style={styles.bgButton} onPress = {onPress}>
            <View style={{flex: 1, flexDirection: 'row', padding: 15}}>
              <Icon name={'ios-settings'} size={14} />
              <Icon name={'ios-settings'} size={25} />
            </View>
            <View style={styles.bgText}>
              <Text style={styles.text}>Quản lý nhà</Text>
              <Icon2 name={'angle-right'} size={20} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{backgroundColor: 'white', paddingLeft: 40}}>
          {data ? (
            data.map(item => {
              if(item.id == houseIsSelected){
                return <Item key={item.id} title={item.houseName} onPress={()=>selectHouse(item.id)} selected={true}/>
              }
              return <Item key={item.id} title={item.houseName} onPress={()=>selectHouse(item.id)}/>;
            })
          ) : (
            <View>
              <Text>Đang cập nhật...</Text>
            </View>
          )}
        </View>
        </>
      </TouchableHighlight>
    </Modal>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
  },
  bgButton: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  bgHomeIcon: {flex: 1, flexDirection: 'row', padding: 15},
  bgText: {
    flex: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(200,200,200)',
    padding: 15,
  },
  text: {fontSize: 16, fontWeight: '400'},
});



