import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const JSXScreen = (props) => {

    const name = 'Vlad'

  return (
      <View style={styles.jsxScreen}>
        <Text style={styles.textOne}>Getting started with React Native</Text>
        <Text style={styles.textTwo}>My name is {name}</Text>
        <Button 
            onPress={() => props.navigation.navigate('Home')}
            title="Go to Home Screen">
        </Button>
      </View>
  );
}

const styles = StyleSheet.create({
    jsxScreen: {
        backgroundColor: 'orange'
    },
    textOne: {
        fontSize: 40,
        
        padding: 10,
    },
    textTwo: {
        fontSize: 20,
        padding: 10,
        
    },
});

export default JSXScreen;