import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + action.payload}
    case 'decrease':
      return { ...state, count: state.count + action.payload}
    default:
      return state
  }
}

const CounterScreen = () => {

    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, { count: 0 });
  
  return (
      <View >
        <Button 
            title='Increase' 
            // onPress={() => { setCounter(counter + 1) }}
            onPress={() => dispatch({ type: 'increase', payload: 1 })}
          >
        </Button>
        <Button 
            title='Decrease'
            // onPress={() => { setCounter(counter - 1) }}
            onPress={() => dispatch({ type: 'decrease', payload: -1 })}
          >
        </Button>
        <Text>Current count: { state.count }</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    
});

export default CounterScreen;