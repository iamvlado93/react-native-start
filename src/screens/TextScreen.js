import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

const TextScreen = (props) => {

    const [password, setPassword] = useState('')

  return (
      <View style={styles.jsxScreen}>
        <TextInput 
            style={styles.input}
            value={password}
            onChangeText={newVal => setPassword(newVal)} 
        />
        { password.length < 5 ? <Text>Password is short</Text> : null }
        <Button 
            onPress={() => props.navigation.navigate('Home')}
            title="Go to Home Screen">
        </Button>
      </View>
  );
}

const styles = StyleSheet.create({
   input: {
       padding: 15,
       borderWidth: 2,
   }
});

export default TextScreen;