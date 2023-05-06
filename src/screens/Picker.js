import React, { useState } from 'react';
import { Picker, Button } from 'react-native';

const PickerScreen = () => {
  const [selectedValue, setSelectedValue] = useState('male');

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    // Do something with the selected value
    console.log(selectedValue);
  };

  return (
    <>
      <Picker
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
      >
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      <Button title="Submit" onPress={handleSubmit} />
    </>
  );
};

export default PickerScreen;
