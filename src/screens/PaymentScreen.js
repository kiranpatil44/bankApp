import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  SafeAreaView,
  Platform,
} from 'react-native';
import InputField from '../components/InputField';
import TransferTypeToggle from '../components/TransferTypeToggle';
import { paymentFieldConfig } from '../config/paymentConfig';
import { 
  FIELD_NAMES, 
  TRANSFER_TYPES,
  CURRENCIES,
  UI_TEXTS,
  TIMING_INFO
} from '../constants/localization';

const PaymentScreen = () => {
  const [transferType, setTransferType] = useState(TRANSFER_TYPES.DOMESTIC);
  const [formData, setFormData] = useState({});

  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleTransferTypeChange = (newType) => {
    setTransferType(newType);
    setFormData({});
  };



  const handleSendPayment = () => {
    const currency = transferType === TRANSFER_TYPES.DOMESTIC ? CURRENCIES.INR : CURRENCIES.USD;
    const transferTypeTitle = transferType === TRANSFER_TYPES.DOMESTIC ? UI_TEXTS.DOMESTIC : UI_TEXTS.INTERNATIONAL;
    
    Alert.alert(
      UI_TEXTS.PAYMENT_INITIATED,
      `${transferTypeTitle} ${UI_TEXTS.TRANSFER}\n\n${UI_TEXTS.RECIPIENT}: ${formData[FIELD_NAMES.RECIPIENT_NAME]}\n${UI_TEXTS.ACCOUNT}: ${formData[FIELD_NAMES.ACCOUNT_NUMBER]}\n${UI_TEXTS.AMOUNT}: ${currency}${formData[FIELD_NAMES.AMOUNT]}${transferType === TRANSFER_TYPES.INTERNATIONAL ? `\n${UI_TEXTS.IBAN}: ${formData[FIELD_NAMES.IBAN]}\n${UI_TEXTS.SWIFT}: ${formData[FIELD_NAMES.SWIFT]}` : ''}`,
      [
        {
          text: UI_TEXTS.OK,
          onPress: () => {
            setFormData({});
          }
        }
      ]
    );
  };

  const currentFields = paymentFieldConfig[transferType];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{UI_TEXTS.BANK_TRANSFER}</Text>
          <Text style={styles.headerSubtitle}>
            {transferType === TRANSFER_TYPES.DOMESTIC ? UI_TEXTS.WITHIN_INDIA : UI_TEXTS.INTERNATIONAL_TRANSFER}
          </Text>
        </View>

        <TransferTypeToggle
          transferType={transferType}
          onToggle={handleTransferTypeChange}
        />

        <View style={styles.formSection}>
          {currentFields.map(field => (
            <InputField
              key={field.name}
              label={field.label}
              value={formData[field.name] || ''}
              onChangeText={(value) => handleInputChange(field.name, value)}
              required={field.required}
              placeholder={field.placeholder}
              keyboardType={field.keyboardType}
              maxLength={field.maxLength}
              minLength={field.minLength}
              minValue={field.minValue}
              maxValue={field.maxValue}
              autoCapitalize={field.autoCapitalize}
              fieldName={field.name}
            />
          ))}
        </View>

        <TouchableOpacity 
          style={[
            styles.sendButton,
          ]} 
          onPress={handleSendPayment}
          activeOpacity={0.8}
        >
          <Text style={[
            styles.sendButtonText,
          ]}>
            {UI_TEXTS.SEND_PAYMENT}
          </Text>
        </TouchableOpacity>

        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            {transferType === TRANSFER_TYPES.DOMESTIC 
              ? TIMING_INFO.DOMESTIC_TIMING
              : TIMING_INFO.INTERNATIONAL_TIMING}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#000000',
  },
  formSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  sendButton: {
    backgroundColor: '#27ae60',
    marginHorizontal: 20,
    marginTop: 20,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  sendButtonDisabled: {
    backgroundColor: '#95a5a6',
    shadowOpacity: 0,
    elevation: 0,
  },
  sendButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  sendButtonTextDisabled: {
    color: '#ecf0f1',
  },
  infoSection: {
    margin: 20,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
});

export default PaymentScreen;