/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Header, Button } from 'react-native-elements';

export class ElTotal extends Component {
    constructor(props) {
        super(props);
        total: 0;
    }

    calculaTotal = () => {
        this.total = this.props.food.item.price;
    }

    render() {
        return (
            <View style={styles.component}>
                <View style={styles.flex3}>

                    <View style={styles.flex1}>
                        <Button title="CALCULA" onPress={this.calculaTotal} />
                    </View>
                    <View style={styles.flex2}>
                        <Text>{this.total}</Text>
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
        flex: 2,
    },
    flex3: {
        flex: 3,
        flexDirection: 'row',
    },
})