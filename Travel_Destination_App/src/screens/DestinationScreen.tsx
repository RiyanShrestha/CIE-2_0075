import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type DestinationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Destination'
>;

type DestinationScreenRouteProp = RouteProp<RootStackParamList, 'Destination'>;

type Props = {
  navigation: DestinationScreenNavigationProp;
  route: DestinationScreenRouteProp;
};

const destinations = [
  {
    name: 'Goa',
    emoji: '🏖️',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZJg-fjIIoosAyOj9NEdTChs71XG29_Kpzw&s',
    description:
      'Famous for its stunning beaches, vibrant nightlife, Portuguese heritage, and golden sunsets along the Arabian Sea.',
  },
  {
    name: 'Paris',
    emoji: '🗼',
    image:
      'https://assets.vogue.in/photos/667922097830445356ea2be9/3:4/w_2560%2Cc_limit/Paris.jpg',
    description:
      'The City of Light dazzles with the Eiffel Tower, world-class cuisine, art museums, and romantic boulevards.',
  },
  {
    name: 'Nepal',
    emoji: '🏔️',
    image:
      'https://static.toiimg.com/thumb/msid-91006932,width-748,height-499,resizemode=4,imgsize-165776/.jpg',
    description:
      'Home to the mighty Himalayas, spiritual temples, trekking trails, and the adventure capital of the world.',
  },
];

const DestinationScreen: React.FC<Props> = ({ navigation, route }) => {
  const { destinationName } = route.params;

  const filteredDestinations = destinations.filter(
    (dest) => dest.name.toLowerCase() === destinationName.toLowerCase()
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Page Title */}
      <Text style={styles.pageTitle}>
        {filteredDestinations.length > 0 ? '🗺️ Destination Guide' : '🗺️ Destination Not Found'}
      </Text>
      <Text style={styles.subtitle}>
        Searched for: <Text style={styles.highlight}>{destinationName}</Text>
      </Text>

      {/* Destination Cards */}
      {filteredDestinations.length > 0 ? (
        filteredDestinations.map((dest) => (
        <View key={dest.name} style={styles.card}>
          {/* Destination Name */}
          <View style={styles.destinationBadge}>
            <Text style={styles.destinationLabel}>Destination</Text>
            <Text style={styles.destinationName}>{dest.emoji} {dest.name}</Text>
          </View>

          {/* Image */}
          <View style={styles.imageWrapper}>
            <Image
              source={{ uri: dest.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.imageOverlay}>
              <Text style={styles.imageOverlayText}>📍 {dest.name}</Text>
            </View>
          </View>

          {/* Info Tiles */}
          <View style={styles.infoRow}>
            <View style={styles.infoTile}>
              <Text style={styles.infoIcon}>🌐</Text>
              <Text style={styles.infoLabel}>Explore</Text>
            </View>
            <View style={styles.infoTile}>
              <Text style={styles.infoIcon}>🏨</Text>
              <Text style={styles.infoLabel}>Stay</Text>
            </View>
            <View style={styles.infoTile}>
              <Text style={styles.infoIcon}>🍽️</Text>
              <Text style={styles.infoLabel}>Dine</Text>
            </View>
            <View style={styles.infoTile}>
              <Text style={styles.infoIcon}>📸</Text>
              <Text style={styles.infoLabel}>Capture</Text>
            </View>
          </View>

          <Text style={styles.description}>{dest.description}</Text>
        </View>
        ))
      ) : (
        <View style={styles.notFoundContainer}>
          <Text style={styles.notFoundText}>No guides available for this destination.</Text>
          <Text style={styles.notFoundSubText}>
            Currently we only support Goa, Paris, and Nepal. Check back later!
          </Text>
        </View>
      )}

      {/* Go Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.85}>
        <Text style={styles.backButtonText}>← Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 8,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    color: '#a8a8b3',
    marginBottom: 24,
  },
  notFoundContainer: {
    backgroundColor: '#16213e',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 28,
    borderWidth: 1,
    borderColor: '#e94560',
  },
  notFoundText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  notFoundSubText: {
    fontSize: 14,
    color: '#a8a8b3',
    textAlign: 'center',
    lineHeight: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#16213e',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 10,
  },
  destinationBadge: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#0f3460',
  },
  destinationLabel: {
    fontSize: 12,
    color: '#a8a8b3',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  destinationName: {
    fontSize: 26,
    fontWeight: '800',
    color: '#e94560',
    letterSpacing: 0.5,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 220,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.55)',
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  imageOverlayText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#0f3460',
  },
  infoTile: {
    alignItems: 'center',
    gap: 4,
  },
  infoIcon: {
    fontSize: 22,
  },
  infoLabel: {
    fontSize: 11,
    color: '#a8a8b3',
    fontWeight: '600',
  },
  description: {
    padding: 20,
    fontSize: 14,
    color: '#a8a8b3',
    lineHeight: 22,
  },
  highlight: {
    color: '#e94560',
    fontWeight: '700',
  },
  backButton: {
    width: '100%',
    backgroundColor: '#0f3460',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#e94560',
  },
  backButtonText: {
    color: '#e94560',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});

export default DestinationScreen;
