import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import LoginComponent from "../authentication/loginComponent";
import { AuthStates } from "./AuthStates";
import LogupComponent from "../authentication/logupComponent";
import { useNavigation } from "@react-navigation/native";
import EsqueciSenhaComponent from "./esqueciSenhaComponent";

const AuthenticationScreen: React.FC = () => {
  const [screen, setScreen] = useState(AuthStates.LOGIN);

  const renderScreen = () => {
    if (screen == AuthStates.LOGIN) {
      return <LoginComponent onSignUp={() => setScreen(AuthStates.LOGUP)} onRecoverPassword={() => setScreen(AuthStates.ESQUECISENHA)} />
    }
    else if (screen == AuthStates.LOGUP) {
      return <LogupComponent onBack={() => setScreen(AuthStates.LOGIN)} />
    }
    else if (screen == AuthStates.ESQUECISENHA){
      return <EsqueciSenhaComponent onBack={() => setScreen(AuthStates.LOGIN)} onEsqueciSenha={() => setScreen(AuthStates.LOGIN)} />
    }
    else {
      return <View />
    }
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container} >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            source={{
              uri: 'https://blog.maxmilhas.com.br/wp-content/uploads/2017/09/igrejinha-da-pampulha-em-belo-horizonte.jpg',
            }}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.overlay} />
            <View style={styles.tituloComponent}>
              <Text style={styles.tituloApp}>Relata BH</Text>
            </View>
            <View style={styles.autenticationContainer}>
              {renderScreen()}
            </View>
          </ImageBackground>
        </View >
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: '55%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  tituloComponent: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloApp: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  autenticationContainer: {
    backgroundColor: '#fff',
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    padding: 20,
    bottom: 0,
    position:'absolute',
    width: '100%',
    flex: 1,
  },
});


export default AuthenticationScreen;