/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Autor } from './component/Autor/Autor';

import { ElMeuItem } from './component/ElMeuItem/ElMeuItem';
import { ElTotal } from './component/ElTotal/ElTotal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: [
        {
          name: 'Cereals amb xocolata',
          description: 'Cereals farcits de xocolata',
          quantity: 2,
          category: 'Cereals',
          price: 5,
        }, {
          name: 'Hamburgesa amb formatge',
          description: 'Hamburgesa bona y saludable',
          quantity: 1,
          category: 'Hamburgueses',
          price: 15,
        }, {
          name: 'Aigua Mineral',
          description: 'Aigua de un bassal de el Himalaya',
          quantity: 1,
          category: 'Aigua',
          price: 5,
        }],
    };
  }
  render() {
    return (
      <>
        <View style={styles.pantalla}>
          <View style={styles.part1}>
            <Text>Llistat:</Text>
            <FlatList
              data={this.state.food}
              keyExtractor={(item, index) => index.toString()}
              style={{ padding: 5 }}
              renderItem={(item) => (<ElMeuItem food={item} />)}
            />
          </View>
          <View style={styles.part2}>
            <ElTotal></ElTotal>
          </View>
          <View style={styles.part2}>
            <Autor></Autor>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: '#2d5908',
    flex: 1,
    padding: 10,
  },
  part1: {
    flex: 1,
  },
  part2: {
    flex: 1,
  }
});

export default App;
