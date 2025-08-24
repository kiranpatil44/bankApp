import { FIELD_NAMES } from '../constants/localization';

export const paymentFieldConfig = {
  domestic: [
    { 
      name: FIELD_NAMES.RECIPIENT_NAME, 
      label: "Recipient Name", 
      placeholder: "Enter full name",
      required: true
    },
    { 
      name: FIELD_NAMES.ACCOUNT_NUMBER, 
      label: "Account Number", 
      keyboardType: "numeric",
      placeholder: "Enter account number",
      required: true
    },
    { 
      name: FIELD_NAMES.AMOUNT, 
      label: "Amount (₹)", 
      keyboardType: "numeric",
      placeholder: "Enter amount",
      required: true
    },
  ],
  international: [
    { 
      name: FIELD_NAMES.RECIPIENT_NAME, 
      label: "Recipient Name", 
      placeholder: "Enter full name",
      required: true
    },
    { 
      name: FIELD_NAMES.ACCOUNT_NUMBER, 
      label: "Account Number", 
      keyboardType: "numeric",
      placeholder: "Enter account number",
      required: true
    },
    { 
      name: FIELD_NAMES.AMOUNT, 
      label: "Amount ($)", 
      keyboardType: "numeric",
      placeholder: "Enter amount",
      required: true
    },
    { 
      name: FIELD_NAMES.IBAN, 
      label: "IBAN", 
      placeholder: "Enter IBAN code",
      required: true
    },
    { 
      name: FIELD_NAMES.SWIFT, 
      label: "SWIFT Code", 
      placeholder: "Enter SWIFT code",
      required: true
    },
  ],
};