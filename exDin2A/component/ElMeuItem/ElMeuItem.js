/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Header, Button } from 'react-native-elements';


export class ElMeuItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.component}>
                <View style={styles.flex1}>
                    <View style={styles.flex2}>
                        <Text>{this.props.food.item.name}</Text>
                    </View>
                    <View style={styles.flex2}>
                        <View>
                            <Text>{this.props.food.item.description}</Text>
                        </View>
                        <View style={styles.flex3}>
                            <Text>Preu: {this.props.food.item.price}</Text>
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