import React from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ItemCircle from './ItemCirlce';
import Header from './HeadControll';
import Button from './Button';

const widthScreen = Dimensions.get('screen').width;

export default function AddDevice({navigation, route}) {
  const {navigate, goBack} = navigation;
  const [fill, setFill] = React.useState(0);
  const {bgItemCircle, bgAnimatedCircularProgress, bgButtonNext} = styles;

  React.useEffect(() => {
    if (fill > 100) {
      clearTimeout(timeRun);
      setFill(100);
    } else {
      var timeRun = setTimeout(() => {
        setFill(fill + 1);
      }, 1000);
    }
  });

  return (
    <>
      <Header nameScreen={'Thêm thiết bị'} onLeft={goBack} />
      <View style={{width: '100%'}}>
        <View style={bgItemCircle}>
          <ItemCircle title={1} />
          <ItemCircle title={2} />
          <ItemCircle bgColor={'rgb(0, 145, 187)'} title={3} />
          <ItemCircle title={4} />
          <ItemCircle title={5} />
        </View>
        <Text style={{textAlign: 'center', padding: 20, fontSize: 20}}>
          Đang tìm kiếm thiết bị
        </Text>
      </View>
      <View style={bgAnimatedCircularProgress}>
        <AnimatedCircularProgress
          size={300}
          width={20}
          fill={fill}
          tintColor="#00e0ff"
          backgroundColor="#3d5875">
          {fill => (
            <Text style={{fontSize: 30, color: 'rgb(0, 145, 187)'}}>
              {Math.round(fill)}%
            </Text>
          )}
        </AnimatedCircularProgress>
      </View>
      <View style={bgButtonNext}>
        <Button
          title={'Xác nhận'}
          disabled={false}
          onPress={() => navigate('AddDevice4')}
        />
      </View>
    </>
  );
}

//style
const styles = StyleSheet.create({
  bgItemCircle: {
    marginVertical: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: widthScreen - 40,
    alignSelf: 'center',
  },
  bgButtonNext: {
    overflow: 'hidden',
    borderRadius: 10,
    width: widthScreen - 40,
    alignSelf: 'center',
  },
  bgAnimatedCircularProgress: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});
