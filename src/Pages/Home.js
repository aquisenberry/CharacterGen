import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View, Text, Image, StyleSheet} from 'react-native';
import Images from '@assets/images';
import CharacterArt from '@components/CharacterArt';
import BasicInfo from '@components/BasicInfo';


const Home = () => {
  return (
    <SafeAreaView
      style={styles.page}
    >
      <BasicInfo />
      <CharacterArt />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page:{
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    flexDirection: 'column'
  }
});
export default Home;