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
                    // Return the icon
                    return <Feather name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'tomato',
                },
            })}
        >
            <Tab.Screen
                name="Current Weather"
                children={() => <CurrentWeather weatherData={weather?.list ? weather.list[0] : null} />}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Upcoming Weather"
                component={UpcomingWeather}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="City"
                component={City}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
