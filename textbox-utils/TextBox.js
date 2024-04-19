import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import Draggable from "react-native-draggable";
import Icon from "react-native-vector-icons/FontAwesome";

const TextBox = ({id,focusedBox}) => {
  const [rotateBy, setRotateBy] = useState(-5);
  const [text, setText] = useState("");
  const [textSize, setTextSize] = useState(17);
  
  const handleTextSizeChange = (change) => {
    setTextSize((prevSize) => prevSize + change);
  };

  const handleRotateText = (change) => {
    setRotateBy((prevAngle) => prevAngle + change);
  };

  return (
    <View style={{ flex: 1}}>
      {
        (focusedBox==id) && 
        (
      <View style={{flex: 1}}>
      <View style={{ flex: 1,flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#ffff",
          }}
        >
          <Pressable
            onPress={() => handleTextSizeChange(2)}
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
          <Pressable onPress={() => handleRotateText(-3)}>
            <Icon name="rotate-left" size={30} color="black" />
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
          }}
        >
          <Pressable onPress={() => handleRotateText(3)}>
            <Icon name="rotate-right" size={30} color="black" />
          </Pressable>
        </View>
      </View>
     </View>
      )
    }
      <Draggable x={0} y={0} position="absolute" style={{zIndex:5}}>
        <View style={{backgroundColor:"red"}}>
          <TextInput
            style={{
              fontSize: textSize,
              borderWidth: 5,
              transform: [{ rotate: `${rotateBy}deg` }],
            }}
            value={text}
            onChangeText={(inputText) => {
              console.log(inputText);
              setText(inputText);
            }}
            placeholder="Type something..."
            focusable
          />
        </View>
      </Draggable>
    </View>
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
