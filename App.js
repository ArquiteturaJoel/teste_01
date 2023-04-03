import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from "axios";

import MeuComponente from './MeuComponente';

export default function App() {
  state = {
    arrayPokemons:[],
    pagesPokemonsNext:{},
    pagesPokemonsPrevius:{},
  }

  componentDidMount() {
    this.loadPokemon();
  }

  loadPokemon = async (url = null) =>{
    const arrayPokemons = [
      {"name":"articuno"},
      {"name":"chicorita"},
    ]
    const pagesPokemonsNext = {}
    const pagesPokemonsPrevius = {}

    this.setState({arrayPokemons, pagesPokemonsNext, pagesPokemonsPrevius});
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Open World</Text>

      <ScrollView>

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
