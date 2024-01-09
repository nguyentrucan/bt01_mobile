import React, {useEffect} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('Homepage');
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/profile.png')} // Replace with your profile picture
        style={styles.profilePic}
      />
      <Text style={styles.title}>Welcome to My App!</Text>
      <Text style={styles.description}>
        Nguyễn Trúc An - 20110087
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F7FF', // Thay đổi màu nền của screen
    paddingHorizontal: 20,
  },
  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#3E64FF', // Thay đổi màu của title
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666', // Thay đổi màu của description
  },
});

export default WelcomeScreen;
