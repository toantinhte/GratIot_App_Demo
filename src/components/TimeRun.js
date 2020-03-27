import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default function TimeRun({timeDefault = 60, onPress}) {
  const [tm, setTm] = React.useState(timeDefault);
  const [showAgainButton, setShowAgainButton] = React.useState(false);

  const timeRun = () => {
    setTimeout(() => {
      setTm(tm - 1);
    }, 1000);
  };

  const clearTimeRun = async () => {
    await clearTimeout(timeRun);
    setShowAgainButton(true);
    setTm(0);
  };

  const sendAgain = () =>{
    setTm(60);
    setShowAgainButton(false);
    if(onPress) onPress();
  }

  React.useEffect(() => {
    if (tm <= 1) {
      clearTimeRun();
    } else {
      timeRun();
    }
  }, [tm]);





  return (
    <>
      {showAgainButton ? (
        <TouchableOpacity onPress={sendAgain}>
          <Text
            style={{
              color: 'rgb(0, 145, 187)',
              paddingRight: 20,
              textAlign: 'center',
            }}>
            Gửi lại
          </Text>
        </TouchableOpacity>
      ) : (
        <Text style={{textAlign: 'center', paddingRight: 20}}>{tm} s</Text>
      )}
    </>

  );
}
