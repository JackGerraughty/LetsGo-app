import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const data = [
  {
    id: '1',
    name: 'Sarah Nickolson',
    time: '1m ago',
    event: 'Coffee and Chill',
    text: 'Great music and the rooftop view at mine are unbeatable. Anyone want to come join? Comment!',
    image: require('../../assets/party.jpg'),
    comments: 4,
    likes: 22,
    avatar: require('../../assets/matt.jpg')
  },
  {
    id: '2',
    name: 'Sarah Nickolson',
    time: '1m ago',
    event: 'Coffee and Chill',
    text: 'Great music and the rooftop view at mine are unbeatable. Anyone want to come join? Comment!',
    comments: 4,
    likes: 22,
    avatar: require('../../assets/matt.jpg')
  },
  {
    id: '3',
    name: 'Angela Wong',
    time: '50m ago',
    event: '',
    text: 'Great music and people!',
    image: require('../../assets/beach.jpg'),
    comments: 2,
    likes: 18,
    avatar: require('../../assets/cabo.jpg')
  },
];


const { width } = Dimensions.get('window');

const FeedScreen = ({ navigation }) => {




  const renderItem = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.headerRow}>
        <Image source={item.avatar} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.name}>{item.name}</Text>
          {item.event !== '' && <Text style={styles.event}>{item.event}</Text>}
        </View>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      <Text style={styles.text}>{item.text}</Text>
      {item.image && <Image source={item.image} style={styles.image} />}
      <View style={styles.footerRow}>
        <View style={styles.iconGroupCompact}>
          <Ionicons name="heart-outline" size={18} color="gray" />
          <Text style={styles.iconText}>{item.likes}</Text>
          <Ionicons name="chatbubble-outline" size={18} color="gray" style={{ marginLeft: 16 }} />
          <Text style={styles.iconText}>{item.comments}</Text>
        </View>
        <TouchableOpacity style={styles.rsvpBtn} onPress={() => navigation.navigate('EventDetails')}>
          <Text style={styles.rsvpText}>RSVP!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
      <View style={styles.commentBar}>
        <Text style={styles.inputPlaceholder}>Love it so much!</Text>
        <View style={styles.commentActions}>
          <TouchableOpacity style={styles.iconBox}>
            <Ionicons name="image-outline" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBox}>
            <Ionicons name="arrow-up" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF3FF',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  post: {
    backgroundColor: '#fdf4ff',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#d8b4fe',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1,
    borderColor: '#f3e8ff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
  },
  event: {
    fontSize: 12,
    color: '#888',
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
  text: {
    marginVertical: 12,
    fontSize: 16,
  },
  image: {
    width: width - 64,
    height: 200,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  footerRow: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconGroupCompact: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    marginLeft: 4,
    fontSize: 14,
    color: 'gray',
    marginRight: 10,
  },
  rsvpBtn: {
    backgroundColor: '#d946ef',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    shadowColor: '#d946ef',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  rsvpText: {
    color: 'white',
    fontWeight: 'bold',
  },
  commentBar: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    backgroundColor: '#f3e8ff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  inputPlaceholder: {
    color: '#333',
    fontSize: 14,
    flex: 1,
  },
  commentActions: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 12,
  },
  iconBox: {
    backgroundColor: '#d946ef',
    padding: 8,
    borderRadius: 8,
  },
});
