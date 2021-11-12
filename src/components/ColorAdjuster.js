import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorAdjuster = (props) => {

  return (
      <View >
        <Text>{props.color}</Text>
        <Button
            title={`Increase ${props.color}`}
            onPress={() => props.onIncrease()}>
        </Button>
        <Button 
            title={`Decrease ${props.color}`}
            onPress={() => props.onDecrease()}> 
        </Button>
      </View>
  );
}

const styles = StyleSheet.create({
    
});

export default ColorAdjuster;