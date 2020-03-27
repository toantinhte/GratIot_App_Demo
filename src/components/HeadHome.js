import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HouseModal from './HouseModal';
import * as RootNavigation from '../RootNavigation';
import AddButton from './AddButton';

export default function HeadHome({houseIsSelected, data, selectHouse}) {
  const [visibleHouseModal, setVisibleHouseModal] = React.useState(false);
  const [houseNameSelected, setHouseNameSelected] = React.useState(null);
  React.useEffect(()=>{
    if(data){
      const newData = data.filter(item => {
        return item.id == houseIsSelected;
      });
      if(newData[0]){
        setHouseNameSelected(newData[0].houseName);
      }else{
        setHouseNameSelected('Đang cập nhật');
      }
    }
  })
  const {
    bgTop,
    houseButtom,
    houseText,
    weatherButton,
    weatherText,
  } = styles;
  const onOpenModal = () => {
    setVisibleHouseModal(true);
  };
  const selectHouseAction = house => {
    selectHouse(house);
    setVisibleHouseModal(false);
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={bgTop}>
        <TouchableOpacity style={houseButtom} onPress={onOpenModal}>
          {/* Get house is selected */}
          <Text style={houseText}>
            {houseNameSelected}
          </Text>
          <Icon name={'angle-down'} size={20} />
        </TouchableOpacity>
        <AddButton onPress={() => {
            RootNavigation.navigate('AddDevice');
          }}/>
      </View>
      <TouchableOpacity style={weatherButton}>
        <Text style={weatherText}>
          Cập nhật vị trí nhà để tự động hóa theo thời tiết
        </Text>
        <Icon name={'angle-down'} size={20} />
      </TouchableOpacity>
      <HouseModal
        visible={visibleHouseModal}
        onPress={() => {
          RootNavigation.navigate('ManagerHouse');
          setVisibleHouseModal(false);
        }}
        onPress2 ={()=>setVisibleHouseModal(false)}
        data={data}
        selectHouse={selectHouseAction}
        houseIsSelected={houseIsSelected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bgTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  houseText: {fontSize: 18, fontWeight:'400' , marginRight: 5},
  houseButtom: {flexDirection: 'row', alignItems: 'center'},
  weatherText: {fontWeight: '400', marginRight: 5},
  weatherButton: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
});
