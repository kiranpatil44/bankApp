import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const TransferTypeToggle = ({ transferType, onToggle }) => {
  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[
          styles.toggleButton,
          styles.toggleLeft,
          transferType === 'domestic' && styles.toggleActive
        ]}
        onPress={() => onToggle('domestic')}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.toggleText,
          transferType === 'domestic' && styles.toggleTextActive
        ]}>
          Domestic Transfer
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[
          styles.toggleButton,
          styles.toggleRight,
          transferType === 'international' && styles.toggleActive
        ]}
        onPress={() => onToggle('international')}
        activeOpacity={0.7}
      >
        <Text style={[
          styles.toggleText,
          transferType === 'international' && styles.toggleTextActive
        ]}>
          International Transfer
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 25,
    padding: 4,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 20,
  },
  toggleLeft: {
    marginRight: 2,
  },
  toggleRight: {
    marginLeft: 2,
  },
  toggleActive: {
    backgroundColor: '#3498db',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  toggleText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7f8c8d',
  },
  toggleTextActive: {
    color: '#ffffff',
  },
});

export default TransferTypeToggle;
