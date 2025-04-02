import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { YStack, XStack, Image, Separator, Button, Text } from 'tamagui'


// Define the param list for the stack


const ProfileScreen= ({ navigation }) => {

  const [activeTab, setActiveTab] = useState<'Posts' | 'Going' | 'Hosting'>('Posts')
  const images = [
    require('../../assets/beach.jpg'),
    require('../../assets/cabo.jpg'),
    require('../../assets/cali.jpg'),
    require('../../assets/matt.jpg'),
    require('../../assets/party.jpg'),
    require('../../assets/party(1).jpg'),
    require('../../assets/profile-pic.jpg'),
    require('../../assets/background.jpg'),
    require('../../assets/profile-pic.jpg'),
  ]
  

  const handleTabPress = (tab: 'Posts' | 'Going' | 'Hosting') => {
    setActiveTab(tab)
    // Handle tab logic if needed
  }



  return (
    <ScrollView>
      <YStack backgroundColor="#fff" paddingTop="$10">
        {/* Top Row Icons */}
        <XStack alignItems="center" paddingHorizontal="$4" paddingVertical="$2">
        {/* Left Spacer - matches icon group width or more */}
        <View width={50} />

        {/* Centered Title */}
        <Text flex={1} textAlign="center" fontWeight="700" fontSize="$5">
          Jack Gerraughty ⌄
        </Text>

        {/* Right Icons */}
        <XStack space="$2" width={50} justifyContent="flex-end">
          <Ionicons name="link" size={20} />
          <Ionicons name="menu" size={20} />
        </XStack>
      </XStack>

        {/* Profile Pic */}
        <YStack alignItems="center" paddingTop="$2">
          <Image
            source={require('../../assets/profile-pic.jpg')}
            width={100}
            height={100}
            borderRadius={50}
            borderWidth={3}
            borderColor="white"
          />
          <Text fontWeight="800" marginTop="$2" fontSize="$5">
            @JackGerraughty
          </Text>

          {/* Stats */}
          <XStack space="$2" marginTop="$3" >
          <YStack alignItems="center" width={80} padding="$2" borderRadius={6}>
            <Text fontWeight="700" fontSize="$6" fontWeight="bold"
            >6</Text>
            <Text fontSize="$2">Following</Text>
          </YStack>

          <YStack alignItems="center" width={80} padding="$2" borderRadius={6}>
            <Text fontWeight="700" fontSize="$6" fontWeight="bold"
            >243</Text>
            <Text fontSize="$2">Followers</Text>
          </YStack>

          <YStack alignItems="center" width={80} padding="$2" borderRadius={6}>
            <Text fontWeight="700" fontSize="$6" fontWeight="bold"
            >14.7K</Text>
            <Text fontSize="$2">Likes</Text>
          </YStack>
          </XStack>

          {/* Buttons: Edit + Share */}
          <XStack marginTop="$3" space="$3">
            <Button size="$3" theme="active">
              Edit Profile
            </Button>
            <Button size="$3" theme="active">
              Share Profile
            </Button>

          </XStack>

          {/* Bio */}
          <Text
            style={{
              marginTop: 12,
              textAlign: 'center',
              paddingHorizontal: 20,
            }}
          >
            San Diego -> Arizona {'\n'}
            instagram: JackGerraughty
          </Text>
        </YStack>

        {/* Tab Icons */}
        <XStack justifyContent="space-around" paddingVertical="$2">
          <Pressable onPress={() => handleTabPress('Posts')}>
            <YStack alignItems="center">
              <Ionicons
                name="grid-outline"
                size={24}
                color={activeTab === 'Posts' ? 'black' : 'gray'}
              />
              {activeTab === 'Posts' && (
                <YStack height={4} width={24} backgroundColor="gray" borderRadius={1} marginTop={4} />
              )}
            </YStack>
          </Pressable>

          <Pressable onPress={() => handleTabPress('Going')}>
            <YStack alignItems="center">
              <Ionicons
                name="calendar-outline"
                size={24}
                color={activeTab === 'Going' ? 'black' : 'gray'}
              />
              {activeTab === 'Going' && (
                <YStack height={4} width={24} backgroundColor="gray" borderRadius={1} marginTop={4} />
              )}
            </YStack>
          </Pressable>

          <Pressable onPress={() => handleTabPress('Hosting')}>
            <YStack alignItems="center">
              <Ionicons
                name="clipboard-outline"
                size={24}
                color={activeTab === 'Hosting' ? 'black' : 'gray'}
              />
              {activeTab === 'Hosting' && (
                <YStack height={4} width={24} backgroundColor="gray" borderRadius={1} marginTop={4} />
              )}
            </YStack>
          </Pressable>
        </XStack>
        <Separator />

        {/* Grid Posts */}
        <YStack flexWrap="wrap" flexDirection="row" width="100%" justifyContent='flex-start' padding={0} margin={0}>
        {images.map((img, i) => (
          <YStack key={i} width="33.33%" aspectRatio={1} padding={0.5}>
            <YStack width="100%" height="100%" position="relative" overflow="hidden">
              <Image
                source={img} // 👈 now dynamic
                width="100%"
                height="100%"
                resizeMode="cover"
              />
              <Text
                position="absolute"
                bottom={6}
                right={6}
                color="white"
                fontSize={12}
                fontWeight="bold"
                fontFamily="system"
                backgroundColor="rgba(0,0,0,0.4)"
                paddingHorizontal={6}
                paddingVertical={2}
                borderRadius={4}
              >
                {i === 0 ? 'Drafts: 4' : `${i * 100 + 200} views`}
              </Text>
            </YStack>
          </YStack>
          ))}
        </YStack>
      </YStack>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ProfileScreen;