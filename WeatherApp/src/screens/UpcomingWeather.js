import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ListItem from '../components/ListItem';

const DATA = [
    {
        dt_txt: '2021-01-01 12:00:00',
        main: {
            temp_max: 10,
            temp_min: 8,
        },
        weather: [
            {
                main: 'Cloudy',
            }
        ],
    },
    {
        dt_txt: '2021-02-11 13:00:00',
        main: {
            temp_max: 12,
            temp_min: 6,
        },
        weather: [
            {
                main: 'Rain',
            }
        ],
    },
    {
        dt_txt: '2021-01-01 15:00:00',
        main: {
            temp_max: 15,
            temp_min: 12,
        },
        weather: [
            {
                main: 'Clear',
            }
        ],
    },
]

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <ListItem
         condition={item.weather[0].main}
         dt_txt={item.dt_txt}
         min={item.main.temp_min}
         max={item.main.temp_max}
        />
    )

    const { container, Image } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/upcoming-background.jpg')} 
                style={Image} 
            >
                <Text>Upcoming Weather</Text>
                <FlatList
                data={DATA}
                renderItem={renderItem} 
                keyExtractor={item => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue',
    },
    Image: {
        flex: 1,
    }
});

export default UpcomingWeather;