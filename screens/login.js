import React from "react";
  import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Image
        style={styles.logo}
        source={require("../assets/images/logo.png")}
      />
      <Image 
      style={styles.translate}
      source={require("../assets/images/translate.png")}/>
    </View>
      <View style={styles.loginImage}>
        <Text style={styles.welcome}>Welcome!</Text>
        <Image source={require("../assets/images/login.png")} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UserSwitch')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
          <View style={styles.line}></View>
            <Text style={styles.orText}>OR</Text>
          <View style={styles.line}></View>
        </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: windowWidth * 1,
    paddingHorizontal: windowWidth * 0.05,
  },
  logo: {
    width: windowWidth * 0.35,
    height: windowHeight * 0.11,
    marginTop: windowHeight * 0.05,
  },
  translate: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.05,
  },
  welcome: {
    fontSize: windowHeight * 0.05,
    color: "#049A10",
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    paddingBottom: windowHeight * 0.02,
  },
  loginImage: { 
    marginVertical: windowHeight * 0.065,
  },
  button: {
    backgroundColor: "#049A10",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: windowHeight * 0.05,
    width: windowWidth * 0.65,
    height: windowHeight * 0.065,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: windowHeight * 0.025,
  },
  or: {
    fontSize: windowHeight * 0.05,
    marginVertical: windowHeight * 0.02,
    fontFamily: "Poppins_700Bold",
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: windowHeight * 0.01,
  },
  line: {
    width: windowWidth * 0.2, 
    height: windowHeight * 0.002,
    backgroundColor: '#3F3D56',
    marginHorizontal: windowWidth * 0.04,
  },  
  orText: {
    fontSize: windowHeight * 0.02,
    fontFamily: "Poppins_700Bold",
    color: "#3F3D56",
  },
});
