import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';
import { Ionicons } from '@expo/vector-icons';

NfcManager.start();

function ReadNFC() {
  const [scale] = useState(new Animated.Value(1));
  const [tagData, setTagData] = useState(null);

  async function readNdef() {
    try {
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();

      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      setTagData(tag);
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
      setTagData({ error: 'Failed to read tag' });
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={styles.wrapper}>
      <Animated.View style={[styles.iconWrapper, { transform: [{ scale }] }]}> 
        <Ionicons name="radio-outline" size={80} color="#4CAF50" />
      </Animated.View>
      <TouchableOpacity style={styles.button} onPress={readNdef}>
        <Text style={styles.buttonText}>Scan a Tag</Text>
      </TouchableOpacity>
      {tagData && (
        <View style={styles.tagInfo}>
          <Text style={styles.tagText}>{tagData.error ? tagData.error : JSON.stringify(tagData, null, 2)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  iconWrapper: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  tagInfo: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  tagText: {
    color: '#fff',
  },
});

export default ReadNFC;