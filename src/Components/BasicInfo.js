import React, {useState} from 'react';
import {View, Text,StyleSheet} from 'react-native';


const BasicInfo = () => {
  return (
      <View
        style={styles.container}
      >
        <Text>Character Info Goes Here</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flexDirection: 'column'
  }
});
export default BasicInfo;