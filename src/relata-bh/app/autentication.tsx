import { StyleSheet, Text, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import LoginComponent from '@/components/autentication/loginComponent';
import LogupComponent from '@/components/autentication/logupComponent';
import { useState } from 'react';
import { AutenticationStates } from '@/constants/autenticationStates';

export default function AutenticationScreen() {
  const [screen, setScreen] = useState(AutenticationStates.LOGIN);
  const renderScreen = () => {
    if (screen == AutenticationStates.LOGIN) {
      return <LoginComponent onSignUp={ () => setScreen(AutenticationStates.LOGUP)} />
    }
    else if (screen == AutenticationStates.LOGUP) {
      return <LogupComponent onBack={() => setScreen(AutenticationStates.LOGIN)} />
    }
    else {
      return <View />
    }
  }

  return (
    <>
      <ThemedView style={styles.container}>
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
      </ThemedView>
    </>
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
  tituloComponent:{
    alignItems:"center",
    justifyContent: "center",
    paddingTop: 105,
  }

});
