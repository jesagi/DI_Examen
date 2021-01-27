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
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {ElMeuItem} from './component/ElMeuItem/ElMeuItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'Cerealsambxocolata',
        description:'Cerealsfarcitsdexocolata',
        quantity:2,
        category:'Cereals',
        price:5,
    };
  }
  render() {
    return (
      <>
      <View style={styles.pantalla}>
        <Text>Llistat:</Text>
        <ElMeuItem data={this.state} />
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
});

export default App;
