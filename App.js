import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import MeuComponente from './MeuComponente';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Open World</Text>

      <ScrollView>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
        <MeuComponente/>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color:'#FFF',
    fontSize: 24
  }
});
