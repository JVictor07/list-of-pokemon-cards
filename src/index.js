import React, {useEffect, useState} from 'react';
import {
  Image,
  FlatList,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import api from './services/api';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get('/cards').then(({data}) => {
      setCharacters(data.cards);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFCC01" />

      <SafeAreaView style={styles.container}>
        <Image
          style={styles.brand}
          source={{uri: 'https://i.imgur.com/z48UAFL.jpg'}}
        />

        <FlatList
          data={characters}
          keyExtractor={(pokemon) => pokemon.id}
          renderItem={({item: pokemon}) => (
            <Image source={{uri: pokemon.imageUrl}} style={styles.pokemon} />
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  brand: {
    width: 100,
    height: 38,
    marginTop: 10,
    marginBottom: 15,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFCC01',
  },

  pokemon: {
    width: 365,
    height: 501.875,
    marginBottom: 30,
  },
});

export default App;
