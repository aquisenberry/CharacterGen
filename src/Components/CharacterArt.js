import React, {useState} from 'react';
import { View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import Images from '@assets/images';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const CharacterArt = () => {
  return (
      <View
        style={[
            styles.imageContainer,
            {
                width: windowWidth > windowHeight? windowHeight * .94 : windowWidth * .94, 
                height: windowWidth > windowHeight? windowHeight * .94 : windowWidth * .94
            }
        ]}
      >
        <Image 
          style={styles.image}
        //   TODO: replace hard coded image with passed image
          source={Images.hello}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 3, 
    borderColor: '#999999',
    justifyContent: 'flex-start',
  },
  image: {
    flex:-1,
    resizeMode: 'contain',
    width: '100%',
  }
});
export default CharacterArt;