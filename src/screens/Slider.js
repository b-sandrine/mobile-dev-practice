import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider'

const SliderScreen = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        thumbTintColor="#307ecc"
        step={1}
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
      />
      <Text>Value: {sliderValue}</Text>
    </View>
  );
};

export default SliderScreen;
