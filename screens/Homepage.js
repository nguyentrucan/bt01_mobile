import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Homepage = ({ navigation }) => {
  const navigateToWelcome = () => {
    navigation.navigate('WelcomeScreen'); // Điều hướng đến trang WelcomeScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Homepage</Text>
      <TouchableOpacity onPress={navigateToWelcome} style={styles.button}>
        <Text style={styles.buttonText}>Go to Welcome Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3E64FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Homepage;
