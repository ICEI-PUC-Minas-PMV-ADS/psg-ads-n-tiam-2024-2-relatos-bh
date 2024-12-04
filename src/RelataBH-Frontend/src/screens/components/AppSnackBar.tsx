import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';

type SnackbarMessage = {
    text: string
}
const AppSnackbar = (message: SnackbarMessage) => {
  const [visible, setVisible] = React.useState(false);
  const onDismissSnackBar = () => setVisible(false);

  return (
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}>
        {message.text}
      </Snackbar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default AppSnackbar;