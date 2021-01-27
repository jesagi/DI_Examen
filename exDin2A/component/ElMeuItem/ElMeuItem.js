/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Header, Button } from 'react-native-elements';


export class ElMeuItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name:'Cereals amb xocolata',
            description:'Cereals farcits de xocolata',
            quantity:2,
            category:'Cereals',
            price:5,
        };
    }
    render() {
        return (
            <View style={styles.component}>
                <View style={styles.flex1}>
                    <View style={styles.flex2}>
                        <Text>{this.state.name}</Text>
                    </View>
                    <View style={styles.flex2}>
                        <View>
                            <Text>{this.state.description}</Text>
                        </View>
                        <View style={styles.flex3}>
                            <Text>Preu: {this.state.price}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    component: {
        backgroundColor: '#ebab34',
        borderColor: '#1e2f94',
        borderWidth: 1,
        padding: 10,
        height: 60,
    },
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 1,
        flexDirection: 'row',
    },
    flex3: {
        flex: 1,
        alignContent: 'flex-end',
    },
})