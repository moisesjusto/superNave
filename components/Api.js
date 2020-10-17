import React, { Component } from 'react'
import { Text, StatusBar, Button, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Index from './Index';


export default class Api extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container, { backgroundColor: '#6a51ae' }}>
                <Index/>
                <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
                <Text style={{ color: 'rgb(0, 0, 0)' }}>Light Screen</Text>
                <Button title="Next screen" onPress={() => this.props.navigation.navigate('Screen3')} color="rgb(0, 0, 0)" />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  });
  