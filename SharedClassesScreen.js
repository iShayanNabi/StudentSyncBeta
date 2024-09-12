
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function SharedClassesScreen({ userId, targetUserId }) {
  const [sharedClasses, setSharedClasses] = useState([]);

  useEffect(() => {
    const getSharedClasses = async () => {
      const userDoc = await firestore().collection('users').doc(userId).get();
      const targetUserDoc = await firestore().collection('users').doc(targetUserId).get();

      if (userDoc.exists && targetUserDoc.exists) {
        const userClasses = userDoc.data().classes || [];
        const targetClasses = targetUserDoc.data().classes || [];
        const shared = userClasses.filter((classItem) => targetClasses.includes(classItem));
        setSharedClasses(shared);
      }
    };
    
    getSharedClasses();
  }, [userId, targetUserId]);

  return (
    <View>
      <Text>Shared Classes with {targetUserId}</Text>
      <FlatList
        data={sharedClasses}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default SharedClassesScreen;
