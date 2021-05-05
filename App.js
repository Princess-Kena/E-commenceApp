import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RedJacket from './components/RedJacket';
import JacketScreen from './components/JacketScreen';
import Nav from './components/Nav';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Nav /> */}
      <RedJacket/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
