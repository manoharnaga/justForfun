import React, { useState } from "react";
import { View,Text,StyleSheet,Platform,StatusBar,SafeAreaView,Image} from "react-native";
import TextBox from "./TextBox";
import TextToImg from "./TexttoImg";

const App = () => {
  const [imageUrl, setImageUrl] = useState('');
  return (
    <SafeAreaView
      style={{
        flex: 1,
        zIndex:1,
        flexDirection: "row",
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#660066",
          }}
        >
          <TextToImg setImageUrl={setImageUrl}/>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#0066ff",
          }}
        ></View>
        <View
          style={{
            flex: 1,
            backgroundColor: "#660066",
          }}
        ></View>
        <TextBox key={3}/>
      </View>

      <View
        style={{
          flex: 11,
          zIndex:-3,
          backgroundColor: "#00cc00",
        }}
      >
        {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          // resizeMode="cover"
        />
      ) : (
        <Text style={styles.placeholderText}>Enter something to generate an image</Text>
      )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#00cc00",
  },
  image:{
    flex:1,
    zIndex:-3,
    borderRadius:5,
  },
});

export default App;
