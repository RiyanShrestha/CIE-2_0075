import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [destination, setDestination] = useState('');

  const handleExplore = () => {
    if (destination.trim()) {
      navigation.navigate('Destination', { destinationName: destination.trim() });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>✈️ Travel Explorer</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.heading}>Explore Your Destination</Text>
        <Text style={styles.subheading}>
          Discover the world, one city at a time.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Where do you want to go?</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. Paris, Bali, Tokyo..."
            placeholderTextColor="#9b9b9b"
            value={destination}
            onChangeText={setDestination}
            returnKeyType="done"
            onSubmitEditing={handleExplore}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, !destination.trim() && styles.buttonDisabled]}
          onPress={handleExplore}
          activeOpacity={0.85}>
          <Text style={styles.buttonText}>🌍  Explore</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Your adventure awaits 🌟</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#e94560',
    letterSpacing: 1.5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 15,
    color: '#a8a8b3',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 24,
  },
  inputLabel: {
    fontSize: 14,
    color: '#a8a8b3',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#16213e',
    borderWidth: 1.5,
    borderColor: '#0f3460',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 16,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#e94560',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    shadowColor: '#e94560',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonDisabled: {
    backgroundColor: '#5a2535',
    shadowOpacity: 0,
    elevation: 0,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  footer: {
    paddingBottom: 36,
    alignItems: 'center',
  },
  footerText: {
    color: '#4a4a6a',
    fontSize: 13,
  },
});

export default HomeScreen;
