import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';
import { WeatherType } from '../utilities/weatherType';

const CurrentWeather = ({ weatherData }) => {
  const { wrapper, container, tempStyles, feels, highLowWrapper, highLow, bodyWrapper, description, message  } = styles
  
  const { main: {temp, temp_max, temp_min} } = weatherData;

  const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={[wrapper, { backgroundColor: WeatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={WeatherType[weatherCondition].icon} size={100} color="black" />
        <Text style={temp}>6</Text>
        <RowText 
          messageOne={`High: ${temp_max}`} 
          messageTwo={`Low: ${temp_min}`} 
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText 
          messageOne={weather[0].description} 
          messageTwo={weatherType[weatherCondition].message} 
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    backgroundColor: 'lightblue',
    flex: 1,
  },
  tempStyles: {
    fontSize: 48,
    color: 'black',
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highLow: {
    fontSize: 20,
    color: 'black',
  },
  highLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
    color: 'black',
  },
  message: {
    fontSize: 30,
    color: 'black',
  },
});
export default CurrentWeather;