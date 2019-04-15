import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import backgroundImage from "../../assets/background.jpg";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };

  constructor(props) {
    super(props);
  }

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <HeadingText>Please Log In</HeadingText>
          {console.log('start Button  '+ Date.now())}
          <ButtonWithBackground color="#29aaf4" onPress={(this.loginHandler)}>
            Login
          </ButtonWithBackground>
          {console.log('end   Button  '+ Date.now())}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  }
});

export default AuthScreen;
