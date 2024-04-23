import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from './Calculator-sub-components/Button';
import ResultsDisplay from './Calculator-sub-components/ResultsDisplay';
import { CalculatorStyle } from './Calculator.style';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [operationString, setOperationString] = useState('');
  const [showOperation, setShowOperation] = useState(false);

  const handleInput = (value) => {
    setInputValue((prevValue) => {
      if (prevValue === '0' || value === ',') {
        return value;
      }
      if (value === '.' && prevValue.includes(',')) {
        return prevValue;
      }
      if (operation && prevValue.slice(-1) === operation) {
        return value;
      }
      return prevValue + value;
    });
  };
  
  const handleOperation = (op) => {
    setOperation(op);
    setPreviousValue(parseFloat(inputValue));
    setInputValue((prevValue) => prevValue + ' ' + op + ' ');
    setOperationString(`${previousValue} ${op}`);
    setShowOperation(false);
  };
  
  const handleCalculate = () => {
    if (inputValue.includes(operation)) {
      const values = inputValue.split(operation);
      const currentValue = parseFloat(values[1]);
      let result;
      if (operation === '+') {
        result = previousValue + currentValue;
      } else if (operation === '-') {
        result = previousValue - currentValue;
      } else if (operation === 'x') {
        result = previousValue * currentValue;
      } else if (operation === '/') {
        result = previousValue / currentValue;
      }
      if (result !== undefined) {
        setInputValue(result.toString());
        setPreviousValue(null);
        setOperation(null);
        setOperationString(`${previousValue} ${operation} ${currentValue} =`);
        setShowOperation(true);
      }
    } else if (previousValue !== null && operation !== null) {
      let result;
      if (operation === '+') {
        result = previousValue + parseFloat(inputValue);
      } else if (operation === '-') {
        result = previousValue - parseFloat(inputValue);
      } else if (operation === 'x') {
        result = previousValue * parseFloat(inputValue);
      } else if (operation === '/') {
        result = previousValue / parseFloat(inputValue);
      }
      if (result !== undefined) {
        setInputValue(result.toString());
        setPreviousValue(null);
        setOperation(null);
        setOperationString(`${previousValue} ${operation} ${parseFloat(inputValue)} =`);
        setShowOperation(true);
      }
    }
  };
  
  const handleClear = () => {
    setInputValue('0');
    setPreviousValue(null);
    setOperation(null);
    setOperationString('');
    setShowOperation(false);
  };
  
  return (
    <View style={CalculatorStyle.container}>
      <ResultsDisplay value={inputValue} operation={showOperation ? operationString : ''} />
      <View style={CalculatorStyle.inputsContainer}>
        <View style={CalculatorStyle.inputNumbersContainer}>
            <View style={CalculatorStyle.inputNumbersRowContainer}>
                <Button text="7" onPress={() => handleInput('7')} backgroundColor="black"/>
                <Button text="8" onPress={() => handleInput('8')} backgroundColor="black"/>
                <Button text="9" onPress={() => handleInput('9')} backgroundColor="black"/>
            </View>
            <View style={CalculatorStyle.inputNumbersRowContainer}>
                <Button text="4" onPress={() => handleInput('4')} backgroundColor="black"/>
                <Button text="5" onPress={() => handleInput('5')} backgroundColor="black"/>
                <Button text="6" onPress={() => handleInput('6')} backgroundColor="black"/>
            </View>
            <View style={CalculatorStyle.inputNumbersRowContainer}>
                <Button text="1" onPress={() => handleInput('1')} backgroundColor="black"/>
                <Button text="2" onPress={() => handleInput('2')} backgroundColor="black"/>
                <Button text="3" onPress={() => handleInput('3')} backgroundColor="black"/>
            </View>
            <View style={CalculatorStyle.inputNumbersRowContainer}>
                <Button text="0" onPress={() => handleInput('0')} backgroundColor="black"/>
                <Button text="." onPress={() => handleInput('.')} backgroundColor="black"/>
                <Button text="=" onPress={handleCalculate} backgroundColor="blue" />
            </View>
        </View>
        <View style={CalculatorStyle.inputOperatorRowContainer}>
            <Button text="&#47;" onPress={() => handleOperation('/')} backgroundColor="orange" />
            <Button text="-" onPress={() => handleOperation('-')} backgroundColor="orange" />
            <Button text="x" onPress={() => handleOperation('x')} backgroundColor="orange" />
            <Button text="+" onPress={() => handleOperation('+')} backgroundColor="orange" />
        </View>
      </View>
          <Button text="C" onPress={handleClear} backgroundColor="red"/>
    </View>
  );
};

export default Calculator;
