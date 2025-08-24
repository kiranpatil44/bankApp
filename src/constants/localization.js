export const FIELD_NAMES = {
  RECIPIENT_NAME: 'recipientName',
  ACCOUNT_NUMBER: 'accountNumber',
  AMOUNT: 'amount',
  IBAN: 'iban',
  SWIFT: 'swift'
};

export const ERROR_MESSAGES = {
  REQUIRED: (label) => `${label} is required`,
  ACCOUNT_DIGITS_ONLY: 'Account number can only contain digits',
  ACCOUNT_MIN_LENGTH: 'Account number must be at least 8 digits',
  ACCOUNT_MAX_LENGTH: 'Account number cannot exceed 18 digits',
  AMOUNT_INVALID: 'Please enter a valid amount',
  AMOUNT_MIN: 'Minimum amount is 1',
  AMOUNT_MAX: 'Maximum amount is 1,000,000',
  IBAN_MIN_LENGTH: 'IBAN must be at least 15 characters',
  IBAN_FORMAT: 'IBAN can only contain letters and numbers',
  SWIFT_MIN_LENGTH: 'SWIFT code must be at least 8 characters',
  SWIFT_FORMAT: 'SWIFT code format: AAAA-BB-CC-12'
};

export const VALIDATION_LIMITS = {
  ACCOUNT_MIN_LENGTH: 8,
  ACCOUNT_MAX_LENGTH: 18,
  AMOUNT_MIN: 1,
  AMOUNT_MAX: 1000000,
  IBAN_MIN_LENGTH: 15,
  SWIFT_MIN_LENGTH: 8
};

export const REGEX_PATTERNS = {
  DIGITS_ONLY: /^\d+$/,
  LETTERS_NUMBERS: /^[A-Z0-9]+$/,
  SWIFT_FORMAT: /^[A-Z0-9-]+$/
};

export const TRANSFER_TYPES = {
  DOMESTIC: 'domestic',
  INTERNATIONAL: 'international'
};

export const CURRENCIES = {
  INR: '₹',
  USD: '$'
};

export const UI_TEXTS = {
  BANK_TRANSFER: 'Bank Transfer',
  WITHIN_INDIA: 'Within India (₹)',
  INTERNATIONAL_TRANSFER: 'International Transfer ($)',
  DOMESTIC: 'Domestic',
  INTERNATIONAL: 'International',
  TRANSFER: 'Transfer',
  SEND_PAYMENT: 'Send Payment',
  OK: 'OK',
  PAYMENT_INITIATED: 'Payment Initiated',
  VALIDATION_ERROR: 'Validation Error',
  RECIPIENT: 'Recipient',
  ACCOUNT: 'Account',
  AMOUNT: 'Amount',
  IBAN: 'IBAN',
  SWIFT: 'SWIFT'
};

export const TIMING_INFO = {
  DOMESTIC_TIMING: 'Domestic transfers usually complete within 1-2 hours',
  INTERNATIONAL_TIMING: 'International transfers may take 3-5 business days'
};