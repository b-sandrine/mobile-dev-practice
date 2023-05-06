import React, { useState } from 'react';
import { CheckBox, Button } from 'react-native';

const CheckBoxScreen = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = () => {
    // Do something with the boolean value
    console.log(isChecked);
  };

  return (
    <>
      <CheckBox
        value={isChecked}
        onValueChange={handleCheckChange}
        label="I agree to the terms and conditions"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </>
  );
};

export default CheckBoxScreen;
