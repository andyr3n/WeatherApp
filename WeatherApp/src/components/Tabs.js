import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Current Weather') {
                        iconName = 'cloud';
                    } else if (route.name === 'Upcoming Weather') {
                        iconName = 'clock';
                    } else if (route.name === 'City') {
                        iconName = 'map-pin';
                    }

                    return <Feather name={iconName} size={size} color={color} />;
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'tomato',
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Current Weather" component={CurrentWeather} >
                {() => <CurrentWeather weatherData={weather.list[0]} />}
            </Tab.Screen>
            <Tab.Screen name="Upcoming Weather" component={UpcomingWeather} />
            <Tab.Screen name="City" component={City} />
        </Tab.Navigator>
    )
}

export default Tabs;