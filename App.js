
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

const App = () => {

  const [name, setName] = useState('Jagat')
  const [session, setSession] = useState({number: 6, title: 'State'})
  const [current, setCurrent] = useState(true)

  const onClickHandler = () => {
      setName('Jagat Jeeban')
      setSession({number:7, title: 'Updated state'})
      setCurrent(false)
  }

  return (
    <View style={styles.body}>

      <Text style={styles.text}>Hello, My name is {name}</Text>
      <Text style={styles.text}>Session number is {session.number} and about {session.title}. </Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='Update state' onPress = {onClickHandler}></Button>

    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle:'normal',
    margin: 10,
  },
});

export default App;
