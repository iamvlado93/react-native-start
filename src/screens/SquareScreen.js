import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ColorAdjuster from '../components/ColorAdjuster';

const COLOR_SWITCHER = 15;

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : { ...state, blue: state.blue + action.payload };
        default:   
            return state; 
    }
}

const SquareScreen = () => {

    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);

    // const setColor = (color, change) => {
    // switch (color) {
    //     case 'red':
    //         red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //         return;
    //     case 'green':
    //         green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //         return;
    //     case 'blue' :
    //         blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //         return;
    //     }
    // }
    
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
      <View >
        <ColorAdjuster 
            color='Red'
            onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_SWITCHER})}
            onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_SWITCHER})}
            // onIncrease={() => setColor('red', COLOR_SWITCHER)}
            // onDecrease={() => setColor('red', -1 * COLOR_SWITCHER)} 
        />
        <ColorAdjuster 
            color='Green' 
            onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_SWITCHER})}
            onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_SWITCHER})}
            // onIncrease={() => setColor('green', COLOR_SWITCHER)}
            // onDecrease={() => setStatusBarBackgroundColor('green', -1 * COLOR_SWITCHER)} 
        />
        <ColorAdjuster 
            color='Blue'
            onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_SWITCHER})}
            onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_SWITCHER})}
            // onIncrease={() => setColor('blue', COLOR_SWITCHER)}
            // onDecrease={() => setColor('blue', -1 * COLOR_SWITCHER)} 
        />
        <View 
            style={{ 
                width: 150, 
                height: 150, 
                backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
            }}>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    
});

export default SquareScreen;