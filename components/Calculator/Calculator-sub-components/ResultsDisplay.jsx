import { View, Text } from 'react-native';
import React from 'react';
import { ResultsDisplayStyle } from './ResultsDisplay.style';

const ResultsDisplay = ({ value, operation }) => {
  return (
    <View style={ResultsDisplayStyle.container}>
      {operation && <Text style={ResultsDisplayStyle.operation}>{operation}</Text>}
      <Text style={ResultsDisplayStyle.result}>{value}</Text>
    </View>
  );
};

export default ResultsDisplay;