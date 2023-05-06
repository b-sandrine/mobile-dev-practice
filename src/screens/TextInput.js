import React, { useState } from 'react';
import { TextInput as RNTextInput, Button } from 'react-native';

const TextInputScreen = () => {
  const [text, setText] = useState('');

  const handleInputChange = (inputValue) => {
    setText(inputValue);
  };

  const handleSubmit = () => {
    // Do something with the input value
    console.log(text);
  };

  return (
    <>
      <RNTextInput
        placeholder="Enter your name"
        onChangeText={handleInputChange}
        value={text}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </>
  );
};

export default TextInputScreen;
