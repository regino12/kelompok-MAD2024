import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const ScreenRegister = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegister = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/LOGO_UNIVERSITAS_KLABAT.png/596px-LOGO_UNIVERSITAS_KLABAT.png' }}
          style={styles.logo}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Register</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#999"
          onChangeText={(text) => setName(text)}
        />
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          placeholderTextColor="#999"
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.inputLabel}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          placeholderTextColor="#999"
          onChangeText={(text) => setAddress(text)}
        />
        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          keyboardType="numeric"
          placeholderTextColor="#999"
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ScreenRegister;