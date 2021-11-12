import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = (props) => {
  
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeScreenText}>Home Screen</Text>
      <Button 
        onPress={() => props.navigation.navigate('JSX')}
        title="Go to JSX Screen">
      </Button>
      <Button 
        onPress={() => props.navigation.navigate('Image')}
        title="Go to Image Screen">
      </Button>
      <Button 
        onPress={() => props.navigation.navigate('List')}
        title="Go to List Screen">
      </Button>
      <Button 
        onPress={() => props.navigation.navigate('Counter')}
        title="Go to Counter Screen">
      </Button>
      <Button 
        onPress={() => props.navigation.navigate('Color')}
        title="Go to Color Screen">
      </Button>
      <Button 
        onPress={() => props.navigation.navigate('Square')}
        title="Go to Square Screen">
      </Button>
      <Button 
            onPress={() => props.navigation.navigate('Text')}
            title="Go to Text Screen">
        </Button>
      </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    textAlign: 'center',
    },

  homeScreenText: {
      fontSize: 30,
      padding: 10,
      backgroundColor: 'green',
    },
});

export default HomeScreen;