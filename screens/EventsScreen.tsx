import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, Searchbar } from 'react-native-paper';

const EventsScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = query => setSearchQuery(query);

    // Dummy events data - replace with your actual data fetch
    const dummyEvents = [
        {
            id: '1',
            title: 'Community Meetup',
            date: 'March 15, 2025',
            location: 'Community Center',
            description: 'Join us for our monthly community gathering to discuss upcoming projects.'
        },
        {
            id: '2',
            title: 'Volunteer Day',
            date: 'March 22, 2025',
            location: 'City Park',
            description: 'Help clean up and beautify our local park. Tools and refreshments provided.'
        },
        {
            id: '3',
            title: 'Workshop Series',
            date: 'April 5, 2025',
            location: 'Innovation Center',
            description: 'Learn new skills with our hands-on workshop series. This month: Digital Marketing.'
        }
    ];

    return (
        <SafeAreaView style={styles.container}>
            <Appbar.Header style={styles.appbarHeader}>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title="Events" />
                <Appbar.Action icon="plus" onPress={() => {/* Add new event logic */ }} />
            </Appbar.Header>

            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="Search events"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.searchBar}
                />
            </View>

            <ScrollView style={styles.scrollView}>
                {dummyEvents.map(event => (
                    <Card key={event.id} style={styles.card}>
                        <Card.Content>
                            <Title>{event.title}</Title>
                            <View style={styles.eventDetails}>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Date:</Text>
                                    <Text style={styles.detailText}>{event.date}</Text>
                                </View>
                                <View style={styles.detailRow}>
                                    <Text style={styles.detailLabel}>Location:</Text>
                                    <Text style={styles.detailText}>{event.location}</Text>
                                </View>
                            </View>
                            <Paragraph>{event.description}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => {/* View event details */ }}>Details</Button>
                            <Button onPress={() => {/* Register for event */ }}>Register</Button>
                        </Card.Actions>
                    </Card>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    appbarHeader: {
        backgroundColor: '#6200ee',
    },
    searchContainer: {
        padding: 10,
        backgroundColor: '#f5f5f5',
    },
    searchBar: {
        elevation: 1,
    },
    scrollView: {
        flex: 1,
        padding: 10,
    },
    card: {
        marginBottom: 15,
        elevation: 2,
    },
    eventDetails: {
        marginVertical: 10,
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    detailLabel: {
        fontWeight: 'bold',
        marginRight: 10,
        width: 70,
    },
    detailText: {
        flex: 1,
    },
});

export default EventsScreen;