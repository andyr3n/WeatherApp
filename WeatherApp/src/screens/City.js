import React from 'react';
import { SafeAreaView, Text, ImageBackground, StyleSheet, StatusBar, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import IconText from '../components/IconText';

const City = () => {
    const { container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout, ImageLayout } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style={ImageLayout}>
                <Text style={[cityName, cityText]}>Vancouver</Text>
                <Text style={[countryName, cityText]}>Canada</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText iconName={"users"} iconColor={"white"} bodyText={"675,218"} bodyTextStyles={populationText} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName={"sunrise"} iconColor={"white"} bodyText={"Sunrise: 7:00 AM"} bodyTextStyles={riseSetText} />
                    <IconText iconName={"sunset"} iconColor={"white"} bodyText={"Sunset: 7:00 PM"} bodyTextStyles={riseSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    ImageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'white',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default City;