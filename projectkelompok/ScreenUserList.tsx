import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const ScreenUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users?authuser=0');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userListContainer}>
        <Text style={styles.userListHeader}>User List</Text>
        {users.map((user) => (
          <View key={user.id} style={styles.userItem}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  userListContainer: {
    marginBottom: 20,
  },
  userListHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    color: '#333',
  },
});

export default ScreenUserList;