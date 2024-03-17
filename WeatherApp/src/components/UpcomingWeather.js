import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';

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

const Item = (props) => {
    const { dt_txt, min, max, condition} = props;
    return (
        <View style={styles.item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{max}</Text>
            <Text style={styles.temp}>{min}</Text>
        </View>
    );
}
const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <Item
         condition={item.weather[0].main}
         dt_txt={item.dt_txt}
         min={item.main.temp_min}
         max={item.main.temp_max}
        />
    )
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/upcoming-background.jpg')} 
                style={styles.Image} 
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
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'pink',
    },
    temp: {
        fontSize: 20,
        color: 'white',
    },
    date: {
        fontSize: 15,
        color: 'white',
    },
    Image: {
        flex: 1,
    }
});

export default UpcomingWeather;