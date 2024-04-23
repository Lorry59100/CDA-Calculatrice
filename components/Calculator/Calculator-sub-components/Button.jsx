import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonStyle } from './ButtonStyle';
import 'react-native-gesture-handler'; // Ne pas oublier de faire un npm i, pour que ce package sois installé et fonctionnel

const Button = ({ text, backgroundColor, onPress }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[ButtonStyle.buttonContainer, { backgroundColor: backgroundColor }]}>
        <Text style={ButtonStyle.text}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
