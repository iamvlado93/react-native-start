import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ImageDetails from '../components/ImageDetails';

const ImageScreen = (props) => {
  
  return (
    <View style={styles.ImageScreenContainer} >
      <ImageDetails 
        style={styles.imageDetails}
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        score={9}
      />
      <ImageDetails 
        style={styles.imageDetails}
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        score={18}
      />
      <ImageDetails
        style={styles.imageDetails}
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        score={11} 
      />
      <Button 
        onPress={() => props.navigation.navigate('Home')}
        title="Go to Home Screen">
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageScreenContainer: {
    padding: 20,
  }
});

export default ImageScreen;