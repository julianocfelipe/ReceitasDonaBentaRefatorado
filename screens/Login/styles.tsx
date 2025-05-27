import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingViewProps,
  ViewProps,
  TextProps,
  TextInputProps,
  TouchableOpacityProps
} from 'react-native';

// Estilos usando StyleSheet
const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbb89',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    width: '90%',
  },
  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    color: '#fff',
    fontSize: 20,
    borderRadius: 10,
    width: '90%',
  },
  buttonSubmit: {
    backgroundColor: '#BF2C62',
    borderRadius: 10,
    width: '50%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  textSubmit: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// Componentes estilizados com TypeScript
export const KeyboardView: React.FC<KeyboardAvoidingViewProps> = ({ children, ...props }) => (
  <KeyboardAvoidingView style={styles.keyboardView} {...props}>
    {children}
  </KeyboardAvoidingView>
);

export const Container: React.FC<ViewProps> = ({ children, ...props }) => (
  <View style={styles.container} {...props}>
    {children}
  </View>
);

export const Title: React.FC<TextProps> = ({ children, ...props }) => (
  <Text style={styles.title} {...props}>
    {children}
  </Text>
);

export const Input: React.FC<TextInputProps> = ({ style, ...props }) => (
  <TextInput
    style={[styles.input, style]}
    placeholderTextColor="#ccc"
    {...props}
  />
);

export const ButtonSubmit: React.FC<TouchableOpacityProps> = ({ children, style, ...props }) => (
  <TouchableOpacity style={[styles.buttonSubmit, style]} {...props}>
    {children}
  </TouchableOpacity>
);

export const TextSubmit: React.FC<TextProps> = ({ children, ...props }) => (
  <Text style={styles.textSubmit} {...props}>
    {children}
  </Text>
);