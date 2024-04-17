// import React, { useState, useRef } from 'react';
// import { TextInput, Pressable } from 'react-native';

// const TextBoxWithInput = () => {
//   const [text, setText] = useState('');
//   const textInputRef = useRef(null);

//   const handlePress = () => {
//     textInputRef.current.focus();
//   };

//   const handleTextChange = (inputText) => {
//     setText(inputText);
//   };

//   return (
//     <Pressable onPress={handlePress} style={({ pressed }) => [{ borderWidth: 2, borderColor: pressed ? '#666' : '#000',borderRadius: 1.5 }]}>
//       <TextInput
//         ref={textInputRef}
//         style={{ flex: 1 }}  // Adjust the style based on your requirements
//         value={text}
//         onChangeText={handleTextChange}
//         editable={true}
//       />
//     </Pressable>
//   );
// };

// export default TextBoxWithInput;
