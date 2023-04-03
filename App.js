import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Open World</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>React Native</Text>
        <Text style={styles.cardSubtitle}>Create sample rs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fonte: 24,
    marginBottom: 24
  },
  card: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 3
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardSubtitle:{
    color: '999',
    fontSize: 14
  }
});
