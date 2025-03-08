import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Appbar } from 'react-native-paper';
import { useFonts } from 'expo-font';

const HomeScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'N-Font': require('../assets/fonts/SixtyfourConvergence-Regular.ttf'),
    });


    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.appbarHeader}>
                <View style={styles.headerBorder}>
                    <Text style={[styles.headerTitle, { fontFamily: 'N-Font' }]}>N</Text>
                </View>
            </Appbar.Header>

            <View style={styles.grid}>
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={() => navigation.navigate('Events')}
                >
                    Events
                </Button>
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={() => navigation.navigate('Calendar')}
                >
                    Calendar
                </Button>
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={() => navigation.navigate('Coordinate')}
                >
                    Coordinate
                </Button>
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={() => navigation.navigate('Settings')}
                >
                    Settings
                </Button>
            </View>

            {/* Admin Section */}
            <Button
                mode="contained"
                style={styles.adminButton}
                onPress={() => navigation.navigate('Admin')}
            >
                Admin
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    appbarHeader: {
        paddingTop: 40,
        width: '100%',
        height: 100,
        backgroundColor: 'white',
    },
    headerBorder: {
        borderWidth: 10,
        borderColor: 'black',
        backgroundColor: 'black',
        borderStyle: 'solid',
        borderRadius: 75,
        backgroundColor: 'black',
    },
    headerTitle: {
        fontSize: 40,
        color: 'yellow',
        textAlign: 'center',
        width: '100%',
    },
    grid: {
        width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginVertical: 20,
        marginTop: 100,
        backgroundColor: 'white',
    },
    button: {
        width: '45%',
        marginVertical: 10,
        paddingVertical: 10,
    },
    adminButton: {
        marginTop: 20,
        width: '80%',
        paddingVertical: 10,
    },
});

export default HomeScreen;
