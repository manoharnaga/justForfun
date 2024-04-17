import React, { useState } from 'react';
import {View,Text,TextInput,Modal,ActivityIndicator,TouchableOpacity, Pressable, Image, StyleSheet } from 'react-native';

const reader = new FileReader();

const TextToImg = (props) => {
  const [textValue, setTextValue] = useState('');
  // const [imageUrl, setImageUrl] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  reader.onload = function () {
    const dataURL = reader.result;
    // console.log(dataURL);
    props.setImageUrl(dataURL);
    return dataURL;
  };

  async function query(data) {
    const response = await fetch(
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
      {
        headers: { Authorization: "Bearer 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" },
        method: "POST",
        body: JSON.stringify(data),
      }
    );  
    const result = await response.blob();
    reader.readAsDataURL(result);
    console.log(result,'helo');
    return null;
  }

  const handleGenerate = () => {
    console.log(textValue);
    setIsLoading(true);
    setShowPopup(false);
    query({"inputs": textValue})
    .then((uri) => {
      console.log("Success", (uri==null),textValue);
      setIsLoading(false);
    })
    .catch((error) => {
      console.error("Error in query:", error);
      setIsLoading(false);
    });
    setTextValue('');
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={showPopup}
        supportedOrientations={['portrait']}
        onRequestClose={() => setShowPopup(false)}
      >
        <View style={styles.popupContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter text to generate an image of it..."
            value={textValue}
            onChangeText={(text) => setTextValue(text)}
          />
          <TouchableOpacity onPress={handleGenerate} style={styles.enterButton}>
            <Text style={styles.buttonText}>ENTER</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {isLoading && (
        <Modal transparent={true} animationType="slide" visible={isLoading}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#007acc"/>
          </View>
        </Modal>
      )}
      {/* {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={[styles.image,{flex:1}]}
          // resizeMode="cover"
        />
      ) : (
        <Text style={styles.placeholderText}>Enter something to generate an image</Text>
      )} */}
      <Pressable
        style={styles.genButton}
        onPress={() => setShowPopup(true)}
      >
        <Text style={styles.buttonText}>Generate</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:"#000",
    alignItems:'center',
    justifyContent: 'center',
  },
  popupContainer: {
    flex: 1,
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  genButton: {
    backgroundColor: '#3498db',
    width:"100%",
    borderRadius:5,
    padding: 15,
    margin:5,
    fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center"
  },
  enterButton:{
    backgroundColor: '#3498db',
    borderRadius:5,
    padding: 15,
    margin:5,
    fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center"
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 3,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    fontSize:17,
    color: "#000", // Adjust the opacity as needed
  },
  buttonText: {
    color: 'white',
    fontWeight:"bold",
  },
  placeholderText: {
    color: '#777',
    textAlign: 'center',
    opacity: 0.8, 
  },
});

export default TextToImg;
