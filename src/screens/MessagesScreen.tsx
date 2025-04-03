import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const publicGroups = [
  {
    id: '1',
    name: 'SFMOMA',
    category: 'Arts & Culture',
    members: '1k+',
    status: 'Join',
    image: require('../../assets/matt.jpg'),
  },
  {
    id: '2',
    name: 'RW Runners Club',
    category: 'Sports',
    members: '20k+',
    status: 'Join',
    image: require('../../assets/cabo.jpg'),
  },
  {
    id: '3',
    name: 'Eater San Francisco',
    category: 'Food & Drinks',
    members: '12k+',
    status: 'Join',
    image: require('../../assets/background.jpg'),
  },
];

const groups = [
  {
    id: '1',
    name: 'Friday BBQ',
    message: 'Denis: this party is going to be massive! I have found my old be...',
    time: '7:10 PM',
    unread: 2,
    avatar: require('../../assets/matt.jpg'),
  },
  {
    id: '2',
    name: 'BladeRunners',
    message: 'Kim: please don’t share this info outside, but we found the major...',
    time: 'Friday',
    unread: 190,
    avatar: require('../../assets/cabo.jpg'),
  },
  {
    id: '3',
    name: 'Stealth startup',
    message: 'Hanna: hey, I managed to get AWS credits from the FBStart program!',
    time: 'Monday',
    unread: 0,
    avatar: require('../../assets/background.jpg'),
  },
];


const MessagesScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Public');

  const renderPublicGroup = ({ item }) => (
    <View style={styles.groupCard}>
      <Image source={item.image} style={styles.groupImage} />
      <View style={{ flex: 1 }}>
        <Text style={styles.groupName}>{item.name}</Text>
        <Text style={styles.groupDetails}>{item.category} • {item.members} members</Text>
      </View>
      <TouchableOpacity style={styles.joinBtn}>
        <Text style={styles.joinText}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderMyGroup = ({ item }) => (
    <TouchableOpacity style={styles.chatCard}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <View style={styles.chatFooter}>
          <Text style={styles.chatMessage} numberOfLines={1}>{item.message}</Text>
          {item.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Community Chat</Text>
        <Ionicons name="search" size={20} color="gray" />
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity
          onPress={() => setSelectedTab('Public')}
          style={[styles.tabBtn, selectedTab === 'Public' && styles.activeTabBtn]}
        >
          <Text style={[styles.tabText, selectedTab === 'Public' && styles.activeTabText]}>Public</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('My Groups')}
          style={[styles.tabBtn, selectedTab === 'My Groups' && styles.activeTabBtn]}
        >
          <Text style={[styles.tabText, selectedTab === 'My Groups' && styles.activeTabText]}>My Groups</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={selectedTab === 'Public' ? publicGroups : groups}
        keyExtractor={(item) => item.id}
        renderItem={selectedTab === 'Public' ? renderPublicGroup : renderMyGroup}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0fb',
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#f3e8ff',
    borderRadius: 20,
    padding: 4,
    marginBottom: 16,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTabBtn: {
    backgroundColor: 'white',
  },
  tabText: {
    color: '#555',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '600',
  },
  groupCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#eee',
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  groupImage: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 12,
  },
  groupName: {
    fontSize: 16,
    fontWeight: '600',
  },
  groupDetails: {
    color: '#555',
    fontSize: 12,
    marginTop: 2,
  },
  joinBtn: {
    backgroundColor: '#d946ef',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  joinText: {
    color: 'white',
    fontWeight: 'bold',
  },
  chatCard: {
    flexDirection: 'row',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  chatContent: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  chatName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatTime: {
    color: '#999',
    fontSize: 12,
  },
  chatFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatMessage: {
    color: '#555',
    flex: 1,
    fontSize: 14,
  },
  unreadBadge: {
    backgroundColor: '#d946ef',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 10,
  },
  unreadText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
