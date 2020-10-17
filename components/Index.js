import React, { Component } from 'react';
import { Button, View } from 'react-native';



export default class index extends Component {
    render() {
        
        return (
                  <View>
                    <Button 
                    title='1'
                    onPress={()=> this.props.navigation.navigate('Screen1')}
                    />
                    <Button 
                    title='2'
                    onPress={()=> this.props.navigation.navigate('Screen2')}
                    />
                    <Button 
                    title='3'
                    onPress={()=> this.props.navigation.navigate('Screen2')}
                    />
                  </View>
        )
    }
}
