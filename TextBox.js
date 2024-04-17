import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Draggable from "react-native-draggable";
import Icon from "react-native-vector-icons/FontAwesome";

const TextBox = () => {
  const [rotateBy, setRotateBy] = useState(-5);
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState("Helo world");
  const [textSize, setTextSize] = useState(35);
  const [buttonsDisabled, setButtonsDisabled] = useState(true);

  const handleTextSizeChange = (change) => {
    setTextSize((prevSize) => prevSize + change);
  };

  const handleRotateText = (change) => {
    setRotateBy((prevAngle) => prevAngle + change);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handelBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={{ flex: 1}}>
      <View style={{ flex: 1,flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffff",
          }}
        >
          <Pressable
            onPress={() => handleTextSizeChange(2)}
            disabled={!isFocused}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "lightgray" : "white",
              },
            ]}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#000",
          }}
        >
          <Pressable
            onPress={() => handleTextSizeChange(-2)}
            disabled={!isFocused}
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed ? "lightgray" : "white",
              },
            ]}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
        >
          <Pressable disabled={!isFocused} onPress={() => handleRotateText(-3)}>
            <Icon name="rotate-left" size={30} color="black" />
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
        >
          <Pressable disabled={!isFocused} onPress={() => handleRotateText(3)}>
            <Icon name="rotate-right" size={30} color="black" />
          </Pressable>
        </View>
      </View>
      <Draggable x={0} y={0} position="absolute" style={{zIndex:5}}>
        <View style={{backgroundColor:"red"}}>
          <TextInput
            style={{
              fontSize: textSize,
              borderWidth: 5,
              transform: [{ rotate: rotateBy + "deg" }],
            }}
            value={text}
            onChangeText={(inputText) => {
              console.log(inputText);
              setText(inputText);
            }}
            placeholder="Type something..."
            onFocus={handleFocus}
            onBlur={handelBlur}
          />
        </View>
      </Draggable>
    </View>

    //   <View style={styles.container}>
    //     <TextInput
    //       style={{
    //         fontSize: 15,
    //         borderWidth: 1,
    //         padding: 10,
    //         transform: [{ rotate: rotateBy+"deg" }], // To make text input readable
    //       }}
    //       placeholder="Type something..."
    //     />
    //   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 10,
  },
  buttonText: {
    fontSize: 25,
  },
});

export default TextBox;
