import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

const ListScreen = (props) => {

    const friends = [
        {
            name: 'Friend1',
            age: '27'
        },
        {
            name: 'Friend2',
            age: '32'
        },
        {
            name: 'Friend3',
            age: '44'
        },
        {
            name: 'Friend4',
            age: '19'
        },
    ]

  return (
    <View>
        <FlatList 
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({ item }) => {
                return (
                    <Text style={styles.friendStyle}>
                        {item.name} - {item.age}
                    </Text>
                );
            }}
        />
        <Button 
            onPress={() => props.navigation.navigate('Home')}
            title="Go to Home Screen">
        </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    friendStyle: {
        padding: 10,
        marginVertical: 1,
        backgroundColor: 'blue'
    }
});

export default ListScreen;