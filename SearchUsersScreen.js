
import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function SearchUsersScreen({ userId }) {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchUsers = async () => {
    const usersRef = firestore().collection('users');
    const querySnapshot = await usersRef
      .where('name', '>=', query)
      .where('name', '<=', query + '')
      .get();
    
    const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setSearchResults(results);
  };

  return (
    <View>
      <TextInput 
        placeholder="Search for students..." 
        value={query} 
        onChangeText={setQuery} 
        onSubmitEditing={searchUsers} 
      />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Follow" onPress={() => handleFollow(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

export default SearchUsersScreen;
