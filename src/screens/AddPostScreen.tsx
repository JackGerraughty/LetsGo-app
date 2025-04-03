import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';



const AddPostScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  return (
    <LinearGradient colors={["#fdf4ff", "#fae8ff"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <TouchableOpacity style={styles.coverUpload}>
          <Image source={require('../../assets/background.jpg')} style={styles.coverImage} />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Upload cover</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.label}>Title</Text>
        <TextInput
          placeholder="Activity title"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />

        <Text style={styles.label}>Date & Time</Text>
        <TouchableOpacity onPress={() => setShowStartPicker(true)} style={styles.input}>
          <Text>Starts: {startDate.toLocaleString()}</Text>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="datetime"
            display="default"
            onChange={(e, date) => {
              setShowStartPicker(false);
              if (date) setStartDate(date);
            }}
          />
        )}
        <TouchableOpacity onPress={() => setShowEndPicker(true)} style={styles.input}>
          <Text>Ends: {endDate.toLocaleString()}</Text>
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="datetime"
            display="default"
            onChange={(e, date) => {
              setShowEndPicker(false);
              if (date) setEndDate(date);
            }}
          />
        )}

        <Text style={styles.label}>Location address</Text>
        <TextInput
          placeholder="Activity location"
          value={location}
          onChangeText={setLocation}
          style={styles.input}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
          style={[styles.input, { height: 100 }]}
          multiline
        />

        <Text style={styles.label}>Category</Text>
        <TextInput
          placeholder="Music, Sports, Party..."
          value={category}
          onChangeText={setCategory}
          style={styles.input}
        />

        <Text style={styles.label}>Ticket price</Text>
        <TextInput
          placeholder="Free or $10, etc."
          value={ticketPrice}
          onChangeText={setTicketPrice}
          style={styles.input}
        />

        <View style={styles.tabSwitchRow}>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, isPublic && styles.activeTab]}
              onPress={() => setIsPublic(true)}
            >
              <Text style={[styles.tabText, isPublic && styles.activeTabText]}>Public</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, !isPublic && styles.activeTab]}
              onPress={() => setIsPublic(false)}
            >
              <Text style={[styles.tabText, !isPublic && styles.activeTabText]}>Private</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.disclaimer}>
          Events that are public will show up on the explore page and a private event will only be able to be seen by people who have the event link
        </Text>
      </ScrollView>

      <TouchableOpacity style={styles.staticPostButton}>
        <Text style={styles.saveText}>Post</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 24,
    paddingBottom: 140,
  },
  coverUpload: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 30,
  },
  coverImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  label: {
    marginBottom: 6,
    marginTop: 20,
    fontWeight: '600',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#f3e8ff',
    padding: 14,
    borderRadius: 12,
    fontSize: 14,
  },
  staticPostButton: {
    backgroundColor: '#d946ef',
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 24,
    right: 24,
    borderRadius: 14,
  },
  saveText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  privacyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  tabSwitchRow: {
    marginTop: 24,
    marginBottom: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ede9fe',
    borderRadius: 24,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: 'white',
  },
  tabText: {
    color: '#6b7280',
    fontWeight: '500',
  },
  activeTabText: {
    color: 'black',
    fontWeight: '600',
  },
  disclaimer: {
    color: 'gray',
    fontSize: 12,
    marginTop: 8,
    lineHeight: 18,
  },
});


export default AddPostScreen;