import React, { useState } from 'react';
import { View, Button } from 'react-native';
import TextBox from './TextBox';

const TextBoxes = () => {
  const [textBoxes, setTextBoxes] = useState([]);
  const [focusedBox,setFocusedBox] = useState();
  const addTextBox = () => {
    const id = Date.now();
    const newTextBoxes = [...textBoxes, { id:id  }];
    setTextBoxes(newTextBoxes);
    setFocusedBox(id);
  };

  const handleTextBoxClick = (id) => {
    setFocusedBox(id);
    console.log('Clicked TextBox ID:', id);
  };

  return (
    <View>
      <Button title="Add TextBox" onPress={addTextBox} />
      {textBoxes.map((textBox) => (
        <TextBox key={textBox.id} id={textBox.id} focusedBox={focusedBox} onClick={() => handleTextBoxClick(textBox.id)} />
      ))}
    </View>
  );
};

export default TextBoxes;
