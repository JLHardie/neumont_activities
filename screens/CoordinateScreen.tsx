import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { DataStore } from '@aws-amplify/datastore';
import Event  from '../models/Event'; // Ensure this path is correct
import { v4 as uuidv4 } from 'uuid';

import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Coordinate: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Coordinate'>;
};


type FormData = {
  title: string;
  description: string;
  event_tags: string;
  date: string;
  host: string;
  max_count: number;
};

export default function CoordinateScreen({ navigation }: Props) {
  const { control, handleSubmit, reset } = useForm<FormData>();
  const [tags, setTags] = useState<string[]>([]);

  // Function to submit the event
  const onSubmit = async (data: FormData) => {
    try {
      const newEvent = new Event(
         uuidv4(),
        data.title,
         data.description,
         tags,
         [],
         new Date(data.date),
         data.host,
        Number(data.max_count),
      );

      await DataStore.save(newEvent);
      Alert.alert('Success', 'Event Created Successfully!');
      reset();
      setTags([]);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to create event');
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Create Event</Text>

      {/* Title */}
      <Text style={styles.label}>Event Title</Text>
      <Controller
        control={control}
        name="title"
        rules={{ required: 'Title is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Enter event title" value={value} onChangeText={onChange} />
        )}
      />

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <Controller
        control={control}
        name="description"
        rules={{ required: 'Description is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter event description"
            value={value}
            onChangeText={onChange}
            multiline
          />
        )}
      />

      {/* Event Tags */}
      <Text style={styles.label}>Event Tags (comma-separated)</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. sports, music, seminar"
        onChangeText={(text) => setTags(text.split(',').map(tag => tag.trim()))}
      />

      {/* Date */}
      <Text style={styles.label}>Date (YYYY-MM-DD)</Text>
      <Controller
        control={control}
        name="date"
        rules={{ required: 'Date is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Enter event date" value={value} onChangeText={onChange} />
        )}
      />

      {/* Host */}
      <Text style={styles.label}>Host</Text>
      <Controller
        control={control}
        name="host"
        rules={{ required: 'Host is required' }}
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Enter host name" value={value} onChangeText={onChange} />
        )}
      />

      {/* Max Attendees */}
      <Text style={styles.label}>Max Attendees</Text>
      <Controller
        control={control}
        name="max_count"
        rules={{ required: 'Max count is required', min: 1 }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Enter max attendees"
            keyboardType="numeric"
            value={value ? value.toString() : ''}
            onChangeText={(text) => onChange(Number(text))}
          />
        )}
      />

      {/* Submit Button */}
      <Button 
        
        title="Create Event" 
        onPress={handleSubmit(onSubmit)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom:10
  },
  textArea: {
    height: 80,
  },

  button: {
    margin: 10
  }
});
