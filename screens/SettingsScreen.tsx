import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const settingsOptions = [
  'Enable Notifications',
  'Dark Mode',
  'Location Access',
  'Auto-Update',
  'Use Cellular Data'
];

const Settings: React.FC = () => {
  const [checkedOptions, setCheckedOptions] = useState<{ [key: string]: boolean }>({});

  const toggleCheckbox = (option: string) => {
    setCheckedOptions((prev) => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.appbarHeader}>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <View style={styles.grid}>
        {settingsOptions.map((option) => (
          <TouchableOpacity key={option} style={styles.button} onPress={() => toggleCheckbox(option)}>
            <View style={styles.option}>
              <Ionicons 
                name={checkedOptions[option] ? 'checkbox' : 'square-outline'} 
                size={24} 
                color="black" 
              />
              <Text style={styles.optionText}>{option}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 40,
    color: 'yellow',
    textAlign: 'center',
    width: '100%',
  },
  grid: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginVertical: 20,
    marginTop: 50,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: 'black',
  }
});

export default Settings;
