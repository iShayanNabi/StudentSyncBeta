
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function ProfileScreen({ userId }) {
  const [userData, setUserData] = useState(null);
  const [classes, setClasses] = useState([]);
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  
  useEffect(() => {
    const getUserData = async () => {
      const userDoc = await firestore().collection('users').doc(userId).get();
      if (userDoc.exists) {
        setUserData(userDoc.data());
        setClasses(userDoc.data().classes || []);
        setFollowing(userDoc.data().following || []);
        setFollowers(userDoc.data().followers || []);
      }
    };
    
    getUserData();
  }, []);

  const handleFollow = async (targetUserId) => {
    try {
      const targetUserDoc = await firestore().collection('users').doc(targetUserId).get();
      if (targetUserDoc.exists) {
        // Update the current user's following list
        await firestore().collection('users').doc(userId).update({
          following: firestore.FieldValue.arrayUnion(targetUserId)
        });
        
        // Update the target user's followers list
        await firestore().collection('users').doc(targetUserId).update({
          followers: firestore.FieldValue.arrayUnion(userId)
        });

        Alert.alert('Followed', `You are now following ${targetUserDoc.data().name}`);
      }
    } catch (error) {
      console.error('Error following user:', error);
      Alert.alert('Error', 'Failed to follow the user.');
    }
  };

  return (
    <View>
      {userData && (
        <>
          <Text>{userData.name}'s Profile</Text>
          <Text>Classes:</Text>
          <FlatList
            data={classes}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text>Following:</Text>
          <FlatList
            data={following}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
          <Text>Followers:</Text>
          <FlatList
            data={followers}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </>
      )}
    </View>
  );
}

export default ProfileScreen;
