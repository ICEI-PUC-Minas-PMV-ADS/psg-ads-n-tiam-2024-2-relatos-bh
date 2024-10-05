import { StyleSheet, Text, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import LoginComponent from '@/components/autentication/loginComponent';
import { useState } from 'react';
import { AutenticationStates } from '@/constants/autenticationStates';

export default function AutenticationScreen() {
  const [screen, setScreen] = useState(AutenticationStates.LOGIN);
  const renderScreen = () => {
    if (screen == AutenticationStates.LOGIN) {
      return <LoginComponent />
    }
    else if (screen == AutenticationStates.LOGUP){
      return <View />
    }
    else
    {
      return <View />
    }

  }

  return (
    <>
      <ThemedView style={styles.container}>
        <View style={styles.logoContainer}>
          <Text>
            qualquer coisa
          </Text>
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


});
