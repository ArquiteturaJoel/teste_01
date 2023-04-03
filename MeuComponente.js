import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MeuComponente() {
  return (
     
    <View style={styles.card}>
      <Text style={styles.cardTitle}>React Native</Text>
      <Text style={styles.cardSubtitle}>Create sample rs</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 12,
    borderRadius: 3,
    marginVertical: 7
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardSubtitle:{
    color: '#999',
    fontSize: 24,
    marginBottom: 24
  }
});
