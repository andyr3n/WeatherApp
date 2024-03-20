import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { WeatherType } from '../utilities/weatherType'; // Adjust the path as necessary
import moment from 'moment';

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { item, temp, date, dateTextWrapper } = styles;

    // Retrieve the icon name from the WeatherType mapping based on the condition
    // Use a default icon if the condition is not found in the WeatherType mapping
    const iconName = WeatherType[condition] ? WeatherType[condition].icon : 'alert-circle';

    return (
        <View style={item}>
            <Feather name={iconName} size={50} color={'white'} />
            <View style={dateTextWrapper}>
                <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
                <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(max)}°/${Math.round(min)}°`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: 'pink',
        backgroundColor: '#D3D3D3', // You can dynamically change this based on condition if needed
    },
    temp: {
        fontSize: 20,
        color: 'white',
    },
    date: {
        fontSize: 15,
        color: 'white',
    },
    dateTextWrapper: {
        flexDirection: 'column',
    }
});

export default ListItem;
