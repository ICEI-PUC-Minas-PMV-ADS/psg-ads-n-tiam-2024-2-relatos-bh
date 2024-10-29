import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import LoginComponent from "../authentication/loginComponent";
import { AuthStates } from "./AuthStates";
import LogupComponent from "../authentication/logupComponent";
import { useNavigation } from "@react-navigation/native";

const AuthenticationScreen: React.FC = () => {
  const [screen, setScreen] = useState(AuthStates.LOGIN);
  
  const renderScreen = () => {
    if (screen == AuthStates.LOGIN) {
      return <LoginComponent onSignUp={() => setScreen(AuthStates.LOGUP)} />
    }
    else if (screen == AuthStates.LOGUP) {
      return <LogupComponent onBack={() => setScreen(AuthStates.LOGIN)} />
    }
    else {
      return <View />
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.tituloComponent}>
          <Text style={styles.tituloApp}>
            Relata BH
          </Text>
        </View>
      </View>
      <View style={styles.autenticationContainer}>
        {renderScreen()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  logoContainer: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  autenticationContainer: {
    backgroundColor: "#fff",
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 20
  },
  tituloApp: {
    fontSize: 30,
  },
  tituloComponent: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 105,
  }

});

export default AuthenticationScreen;