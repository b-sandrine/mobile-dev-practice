import React, { useState } from 'react';
import { View, Button, TimePickerAndroid } from 'react-native';

const TimePickerAndroidScreen = () => {
  const [time, setTime] = useState(new Date());

  const showTimePicker = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: time.getHours(),
        minute: time.getMinutes(),
        is24Hour: true,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        const newTime = new Date();
        newTime.setHours(hour);
        newTime.setMinutes(minute);
        setTime(newTime);
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  };

  return (
    <View>
      <Button title="Pick a time" onPress={showTimePicker} />
      <Text>Selected time: {time.toLocaleTimeString()}</Text>
    </View>
  );
};

export default TimePickerAndroidScreen;
