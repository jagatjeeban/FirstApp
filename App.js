/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello, My name is Jagat Jeeban</Text>
      <Button title='my yt channel' onPress={()=>{Linking.openURL('https://youtube.com/@jagatjeeban2000')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#0000ff',
    fontSize: 20,
    fontStyle:'normal',
    fontWeight:'bold',
    margin: 10,
  },
});

export default App;
