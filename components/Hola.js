import React, { Component } from 'react'
import { Text, StatusBar, Button, SafeAreaView } from 'react-native';



export default class Hola extends Component {
    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
                <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
                <Text>Dark Screen</Text>
                <Button title="Next screen" onPress={() => navigation.navigate('Screen3')} />
            </SafeAreaView>
        )
    }
}
