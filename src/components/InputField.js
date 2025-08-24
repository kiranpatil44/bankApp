import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { 
  FIELD_NAMES, 
  ERROR_MESSAGES, 
  VALIDATION_LIMITS, 
  REGEX_PATTERNS 
} from '../constants/localization';

const InputField = ({ 
  label, 
  value, 
  onChangeText, 
  required = false,
  minLength,
  maxLength,
  minValue,
  maxValue,
  fieldName,
  ...inputProps 
}) => {
  const [error, setError] = useState('');

  const validateInput = (text) => {
    if (required && !text.trim()) {
      setError(ERROR_MESSAGES.REQUIRED(label));
      return false;
    }

    if (!text.trim()) {
      setError('');
      return true;
    }

    if (fieldName === FIELD_NAMES.ACCOUNT_NUMBER) {
      if (!REGEX_PATTERNS.DIGITS_ONLY.test(text)) {
        setError(ERROR_MESSAGES.ACCOUNT_DIGITS_ONLY);
        return false;
      } else if (text.length < VALIDATION_LIMITS.ACCOUNT_MIN_LENGTH) {
        setError(ERROR_MESSAGES.ACCOUNT_MIN_LENGTH);
        return false;
      } else if (text.length > VALIDATION_LIMITS.ACCOUNT_MAX_LENGTH) {
        setError(ERROR_MESSAGES.ACCOUNT_MAX_LENGTH);
        return false;
      }
    }

    if (fieldName === FIELD_NAMES.AMOUNT) {
      const amount = parseFloat(text);
      if (isNaN(amount) || amount <= 0) {
        setError(ERROR_MESSAGES.AMOUNT_INVALID);
        return false;
      } else if (amount < VALIDATION_LIMITS.AMOUNT_MIN) {
        setError(ERROR_MESSAGES.AMOUNT_MIN);
        return false;
      } else if (amount > VALIDATION_LIMITS.AMOUNT_MAX) {
        setError(ERROR_MESSAGES.AMOUNT_MAX);
        return false;
      }
    }

    if (fieldName === FIELD_NAMES.IBAN) {
      if (text.length < VALIDATION_LIMITS.IBAN_MIN_LENGTH) {
        setError(ERROR_MESSAGES.IBAN_MIN_LENGTH);
        return false;
      } 
    }

    if (fieldName === FIELD_NAMES.SWIFT) {
      if (text.length < VALIDATION_LIMITS.SWIFT_MIN_LENGTH) {
        setError(ERROR_MESSAGES.SWIFT_MIN_LENGTH);
        return false;
      } 
    }

    setError('');
    return true;
  };

  const handleTextChange = (text) => {
    onChangeText(text);
    validateInput(text);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.textInput,
          error && styles.textInputError
        ]}
        value={value}
        onChangeText={handleTextChange}
        placeholderTextColor="#999"
        {...inputProps}
      />
      {error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#2c3e50',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  textInputError: {
    borderColor: '#e74c3c',
    borderWidth: 2,
  },
  errorMessage: {
    fontSize: 14,
    color: '#e74c3c',
    marginTop: 5,
    marginLeft: 4,
  },
});

export default InputField;
